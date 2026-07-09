import React,{useRef,useState,useEffect} from "react";
import {FaCamera,FaSpinner,FaSyncAlt} from "react-icons/fa";
import BoundingBox from "../components/BoundingBox";
import "../styles/Camera.css";


function Camera(){

const API = "https://backend-production-7fdc.up.railway.app/detect";

const videoRef=useRef(null);
const streamRef=useRef(null);
const intervalRef=useRef(null);
const boxRef=useRef(null);


const [cameraOn,setCameraOn]=useState(false);
const [loading,setLoading]=useState(false);
const [mode,setMode]=useState("environment");

const [objects,setObjects]=useState([]);
const [image,setImage]=useState(null);
const [captured,setCaptured]=useState(false);

const [videoSize,setVideoSize]=useState({
    width:1280,
    height:720
});

const [total,setTotal]=useState({
    Organik:0,
    Anorganik:0,
    B3:0,
    Kompleks:0
});
const resetCapture=()=>{

    setCaptured(false);
    setImage(null);
    setObjects([]);

    setTotal({
        Organik:0,
        Anorganik:0,
        B3:0,
        Kompleks:0
    });

    openCamera();
};
const classifyWaste=(category)=>{

let warna="#999";

if(category==="Anorganik") warna="#3498db";
if(category==="Organik") warna="#2ecc71";
if(category==="B3") warna="#e74c3c";
if(category==="Kompleks") warna="#f1c40f";


return {
    kategori:category,
    jenis:category,
    warna
};

};




const sendToAPI=async(source)=>{


const canvas=document.createElement("canvas");


const realWidth=source.videoWidth || source.width;
const realHeight=source.videoHeight || source.height;


canvas.width=realWidth;
canvas.height=realHeight;



setVideoSize({

    width:realWidth,

    height:realHeight

});



const ctx=canvas.getContext("2d");


ctx.drawImage(
    source,
    0,
    0
);



const blob=await new Promise(resolve=>

    canvas.toBlob(
        resolve,
        "image/jpeg"
    )

);



const formData=new FormData();


formData.append(
    "image",
    blob,
    "camera.jpg"
);



const response = await fetch(API,{
    method:"POST",
    body:formData
});


const data=await response.json();
setTotal(data.total);

console.log(data);
console.log("OBJECTS:",data.objects);


const result=data.objects.map(obj=>({


    ...obj,

    class:obj.label,

    confidence:obj.confidence,

    ...classifyWaste(obj.category)


}));



setObjects(result);


};






const startAI=()=>{


if(intervalRef.current)

clearInterval(intervalRef.current);



intervalRef.current=setInterval(async()=>{


if(
videoRef.current?.readyState===4 &&
!captured
){

await sendToAPI(videoRef.current);

}


},1000);


};







const openCamera=async()=>{


try{


setLoading(true);



const stream=await navigator.mediaDevices.getUserMedia({


video:{

    facingMode:mode,

    width:{
        ideal:1280
    },

    height:{
        ideal:720
    }

},

audio:false


});



streamRef.current=stream;


videoRef.current.srcObject=stream;


await videoRef.current.play();



setCameraOn(true);

setLoading(false);



startAI();



}catch(e){


console.log(e);

alert("Kamera gagal");

setLoading(false);


}


};







const captureImage=()=>{


const canvas=document.createElement("canvas");


canvas.width=videoRef.current.videoWidth;

canvas.height=videoRef.current.videoHeight;



const ctx=canvas.getContext("2d");



ctx.drawImage(
videoRef.current,
0,
0
);



const img=canvas.toDataURL("image/png");



setImage(img);

setCaptured(true);



const image=new Image();


image.src=img;



image.onload=()=>{

sendToAPI(image);


};



};






const switchCamera=()=>{


if(streamRef.current)

streamRef.current
.getTracks()
.forEach(t=>t.stop());



setMode(

mode==="environment"
?
"user"
:
"environment"

);



setTimeout(
openCamera,
500
);


};







const closeCamera=()=>{


if(intervalRef.current)

clearInterval(intervalRef.current);



if(streamRef.current)

streamRef.current
.getTracks()
.forEach(t=>t.stop());


};







useEffect(()=>{


return()=>closeCamera();


},[]);






return(


<div className="camera-page">


<h1 className="titleolos">
Camera
</h1>



<div 
className="camera-box" 
ref={boxRef}
>


{

captured

?

<img
src={image}
className="camera-video"
/>


:

<video

ref={videoRef}

className="camera-video"

autoPlay

muted

playsInline

/>

}




<BoundingBox

detections={objects}
    imageWidth={videoSize.width}
    imageHeight={videoSize.height}
    displayWidth={boxRef.current?.clientWidth||640}
    displayHeight={boxRef.current?.clientHeight||480}


/>




{cameraOn &&


<div className="camera-status">

● YOLO SERVER AKTIF

</div>


}


</div>





<div className="camera-buttons">

<button
onClick={openCamera}
disabled={cameraOn||loading}
>
{loading?<FaSpinner className="spin"/>:<FaCamera/>}
Buka Kamera
</button>

<button
onClick={switchCamera}
disabled={!cameraOn}
>
<FaSyncAlt/>
</button>

<button
onClick={captureImage}
disabled={!cameraOn}
>
Ambil Gambar
</button>

{captured&&(
<button
onClick={resetCapture}
className="reset-btn"
>
Kembali
</button>
)}


</div>





{

captured &&


<div className="result-area">


<h2>
Hasil Deteksi
</h2>



{

objects.length===0


?

<p>
Tidak ada sampah terdeteksi
</p>


:


objects.map((obj,i)=>(


<div

className="result-card"

style={{

borderLeft:`7px solid ${obj.warna}`

}}

key={i}

>


<h3>
{obj.jenis}
</h3>


<p>
Objek: {obj.class}
</p>


<p>

Confidence:

{(obj.confidence*100).toFixed(1)}%

</p>



<h3>

Kategori:

{obj.kategori}

</h3>


</div>


))


}



</div>


}

{captured && objects.length>0 && (

<div className="summary-card">

<div className="summary-header">
<h3>Ringkasan Deteksi</h3>
<p>Hasil analisis EcoSort AI</p>
</div>

<div className="summary-grid">

<div className="summary-item total">
<div className="summary-title">Total Sampah</div>
<div className="summary-value">{objects.length}</div>
</div>

<div className="summary-item organik">
<div className="summary-title">Organik</div>
<div className="summary-value">{total.Organik}</div>
</div>

<div className="summary-item anorganik">
<div className="summary-title">Anorganik</div>
<div className="summary-value">{total.Anorganik}</div>
</div>

<div className="summary-item b3">
<div className="summary-title">B3</div>
<div className="summary-value">{total.B3}</div>
</div>

<div className="summary-item kompleks">
<div className="summary-title">Kompleks</div>
<div className="summary-value">{total.Kompleks}</div>
</div>

</div>

</div>

)}
</div>      


);


}


export default Camera;