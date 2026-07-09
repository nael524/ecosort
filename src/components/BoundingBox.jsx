import React from "react";

function BoundingBox({
    detections=[],
    imageWidth,
    imageHeight,
    displayWidth,
    displayHeight
}){

    const scaleX=displayWidth/imageWidth;
    const scaleY=displayHeight/imageHeight;

    return(
        <>
        {
            detections.map((obj,i)=>{

                const [x1,y1,x2,y2]=obj.box;

                return(
                    <div
                    key={i}
                    style={{
                        position:"absolute",
                        left:x1*scaleX,
                        top:y1*scaleY,
                        width:(x2-x1)*scaleX,
                        height:(y2-y1)*scaleY,
                        border:`3px solid ${obj.warna}`,
                        borderRadius:"6px",
                        pointerEvents:"none",
                        zIndex:10
                    }}
                    >

                    <div
                    style={{
                        position:"absolute",
                        top:"-28px",
                        left:"0",
                        background:obj.warna,
                        color:"#fff",
                        padding:"4px 8px",
                        borderRadius:"5px",
                        fontSize:"12px",
                        fontWeight:"bold",
                        whiteSpace:"nowrap"
                    }}
                    >

                    {obj.class}
                    {" | "}
                    {obj.kategori}
                    {" "}
                    {(obj.confidence*100).toFixed(1)}%

                    </div>


                    </div>
                )

            })
        }
        </>
    )
}


export default BoundingBox;