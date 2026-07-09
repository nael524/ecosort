import React,{useEffect,useState} from "react";
import {useLocation} from "react-router-dom";
import {loadModel,detect} from "../utils/detector";
import BoundingBox from "../components/BoundingBox";
import "../styles/Camera.css";

function Klasifikasi(){

const location=useLocation();

const [image,setImage]=useState(null);
const [objects,setObjects]=useState([]);
const [loading,setLoading]=useState(true);


const waste={
bottle:{
kategori:"Anorganik",
jenis:"Botol Plastik",
bahaya:"Rendah",
warna:"#3498db",
saran:"Daur ulang botol plastik"
},
cup:{
kategori:"Anorganik",
jenis:"Gelas Plastik",
bahaya:"Rendah",
warna:"#3498db",
saran:"Pisahkan untuk daur ulang"
},
can:{
kategori:"Anorganik",
jenis:"Kaleng",
bahaya:"Sedang",
warna:"#3498db",
saran:"Masukkan bank sampah"
},
banana:{
kategori:"Organik",
jenis:"Sisa Buah",
bahaya:"Aman",
warna:"#2ecc71",
saran:"Jadikan kompos"
},
apple:{
kategori:"Organik",
jenis:"Sisa Makanan",
bahaya:"Aman",
warna:"#2ecc71",
saran:"Buang ke komposter"
},
battery:{
kategori:"B3",
jenis:"Baterai",
bahaya:"Tinggi",
warna:"#e74c3c",
saran:"Jangan dibuang biasa"
}
};


const classify=(name)=>{

name=name.toLowerCase();

for(let key in waste){
if(name.includes(key))
return waste[key];
}

return {
kategori:"Tidak diketahui",
jenis:name,
bahaya:"-",
warna:"#999",
saran:"Periksa manual"
};

};



useEffect(()=>{

const run=async()=>{

if(!location.state?.image)return;

setImage(location.state.image);

await loadModel();

const img=new Image();

img.src=location.state.image;

img.onload=async()=>{

const result=await detect(img);

const data=result.map(obj=>({
...obj,
...classify(obj.class)
}));

setObjects(data);
setLoading(false);

};

};

run();

},[]);



const count={
Organik:0,
Anorganik:0,
B3:0
};

objects.forEach(o=>{
if(count[o.kategori]!==undefined)
count[o.kategori]++;
});



return(
<div className="camera-page">

<h1>♻️ Klasifikasi Sampah AI</h1>

<div className="camera-box">

{image&&
<img
src={image}
className="camera-video"
/>}

<BoundingBox
detections={objects}
width={640}
height={480}
/>

</div>


{loading?
<h2>Menganalisa...</h2>
:
<>

<div className="counter-container">

<div className="counter-card organik">
<h2>Organik</h2>
<h1>{count.Organik}</h1>
</div>

<div className="counter-card anorganik">
<h2>Anorganik</h2>
<h1>{count.Anorganik}</h1>
</div>

<div className="counter-card b3">
<h2>B3</h2>
<h1>{count.B3}</h1>
</div>

</div>


{objects.map((obj,i)=>(

<div
key={i}
className="result-card"
style={{
borderLeft:`8px solid ${obj.warna}`
}}
>

<h2>{obj.jenis}</h2>

<p>
Objek : {obj.class}
</p>

<p>
Confidence :
{(obj.confidence*100).toFixed(1)}%
</p>

<p>
Kategori :
<b>{obj.kategori}</b>
</p>

<p>
Bahaya :
{obj.bahaya}
</p>

<p>
💡 {obj.saran}
</p>

</div>

))}

</>
}

</div>
);

}

export default Klasifikasi;