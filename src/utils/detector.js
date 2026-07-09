import * as ort from "onnxruntime-web";


let session = null;


// COCO classes YOLOv8n
const classes = [

"person",
"bicycle",
"car",
"motorcycle",
"airplane",
"bus",
"train",
"truck",
"boat",
"traffic light",
"fire hydrant",
"stop sign",
"parking meter",
"bench",
"bird",
"cat",
"dog",
"horse",
"sheep",
"cow",
"elephant",
"bear",
"zebra",
"giraffe",
"backpack",
"umbrella",
"handbag",
"tie",
"suitcase",
"frisbee",
"skis",
"snowboard",
"sports ball",
"kite",
"baseball bat",
"baseball glove",
"skateboard",
"surfboard",
"tennis racket",
"bottle",
"wine glass",
"cup",
"fork",
"knife",
"spoon",
"bowl",
"banana",
"apple",
"sandwich",
"orange",
"broccoli",
"carrot",
"hot dog",
"pizza",
"donut",
"cake"

];




// ========================
// LOAD MODEL
// ========================

export const loadModel = async()=>{


if(session)
return;



session =
await ort.InferenceSession.create(

"/models/yolov8n.onnx",

{

executionProviders:[
"wasm"
]

}

);



console.log(
"YOLO MODEL READY"
);



};






// ========================
// PREPROCESS
// ========================


const preprocess=(source)=>{


const canvas =
document.createElement(
"canvas"
);


canvas.width=640;

canvas.height=640;


const ctx =
canvas.getContext(
"2d"
);



ctx.drawImage(

source,

0,

0,

640,

640

);



const image =
ctx.getImageData(
0,
0,
640,
640
);



const pixels =
image.data;



const input =
new Float32Array(
3*640*640
);



const size =
640*640;



for(let i=0;i<size;i++){


input[i] =
pixels[i*4]/255;



input[i+size] =
pixels[i*4+1]/255;



input[i+size*2] =
pixels[i*4+2]/255;



}



return new ort.Tensor(

"float32",

input,

[
1,
3,
640,
640
]

);


};







// ========================
// IOU
// ========================


const iou=(a,b)=>{


const x1 =
Math.max(
a.x,
b.x
);


const y1 =
Math.max(
a.y,
b.y
);



const x2 =
Math.min(
a.x+a.width,
b.x+b.width
);



const y2 =
Math.min(
a.y+a.height,
b.y+b.height
);



const intersection =

Math.max(
0,
x2-x1
)

*

Math.max(
0,
y2-y1
);



const areaA =
a.width*a.height;


const areaB =
b.width*b.height;



return intersection /
(
areaA+
areaB-
intersection
);


};






// ========================
// NMS
// ========================


const nms=(boxes,threshold=0.45)=>{


boxes.sort(
(a,b)=>
b.confidence-a.confidence
);



const result=[];



while(boxes.length){


const best =
boxes.shift();



result.push(best);



boxes =
boxes.filter(
box=>

iou(
best,
box
)
<
threshold

);


}



return result;


};







// ========================
// DETECT
// ========================


export const detect = async(video)=>{


if(!session)
return [];



const tensor =
preprocess(video);



const outputs =
await session.run({

[session.inputNames[0]]:
tensor

});



const output =
outputs[
Object.keys(outputs)[0]
];



console.log(
"YOLO DIMS",
output.dims
);



const data =
output.data;



const detections=[];



const rows=8400;

const numClasses=80;



for(
let i=0;
i<rows;
i++
){



// box
const cx =
data[i];


const cy =
data[rows+i];


const w =
data[rows*2+i];


const h =
data[rows*3+i];



let bestScore=0;

let classId=0;



// class score
for(
let c=0;
c<numClasses;
c++
){


const score =
data[
rows*(4+c)+i
];



if(score>bestScore){

bestScore=score;

classId=c;

}


}



if(bestScore < 0.35)
continue;



detections.push({

class:
classes[classId] || "object",


confidence:
bestScore,


x:
(cx-w/2)
*
(video.videoWidth/640),


y:
(cy-h/2)
*
(video.videoHeight/640),


width:
w*
(video.videoWidth/640),


height:
h*
(video.videoHeight/640)

});



}



tensor.dispose();



return nms(
detections
);



};