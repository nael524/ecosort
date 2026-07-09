import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FaLeaf,
    FaRecycle,
    FaTrashAlt,
    FaGlobeAsia,
    FaArrowLeft
} from "react-icons/fa";

import "../styles/Status.css";

function Status(){

    const navigate=useNavigate();

    const {state}=useLocation();

    const counts=state?.counts || {
        Organik:0,
        Anorganik:0,
        B3:0
    };

    const objects=state?.objects || [];

    const image=state?.image;

    //-------------------------------------
    // DATA
    //-------------------------------------

    const total=
        counts.Organik+
        counts.Anorganik+
        counts.B3;

    const first=objects[0];

    const jenis=first?.label || "-";

    const original=first?.originalLabel || "-";

    //-------------------------------------
    // BERAT ESTIMASI
    //-------------------------------------

    const weight=Math.max(total*30,30);

    //-------------------------------------
    // POINT
    //-------------------------------------

    const point=weight>=100
        ?50
        :Math.round(weight*0.67);

    //-------------------------------------
    // PERSEN
    //-------------------------------------

    const percent=Math.min(weight,100);

    //-------------------------------------
    // MANFAAT
    //-------------------------------------

    let manfaat="";
    let dampak="";
    let pencegahan=[];

    if(jenis==="Organik"){

        manfaat="Mengurangi limbah & menyuburkan tanah";

        dampak="Kompos membantu mengurangi emisi karbon.";

        pencegahan=[
            "Pisahkan sampah sejak dari rumah",
            "Buat kompos dari sisa makanan",
            "Kurangi makanan terbuang"
        ];

    }else{

        manfaat="Dapat didaur ulang menjadi produk baru.";

        dampak="Mengurangi pencemaran lingkungan.";

        pencegahan=[
            "Pisahkan sampah plastik, kaca dan logam",
            "Gunakan kembali barang yang masih layak",
            "Kurangi penggunaan plastik sekali pakai"
        ];

    }

    return(

<div className="status-page">

<div className="status-header">

<button
className="back-btn"
onClick={()=>navigate(-1)}
>
<FaArrowLeft/>
</button>

<h2>Cek Status</h2>

<p>Pantau pengelolaan sampahmu di sini</p>

</div>

{
image&&(

<img
src={image}
className="status-image"
alt=""
/>

)
}

{/* CARD 1 */}

<div className="status-card">

<div className="card-title">

<FaLeaf/>

<h3>Jenis Sampah</h3>

<span className="badge">

Terkategori

</span>

</div>

<ul>

<li>• {jenis}</li>

<li>• {original}</li>

<li>• Berat {weight} gram</li>

</ul>

<div className="point">

Total:
<b>{point} poin</b>

</div>

</div>

{/* CARD 2 */}

<div className="status-card">

<div className="card-title">

<FaRecycle/>

<h3>Kegunaan Sampah</h3>

</div>

<p>

{manfaat}

</p>

<div className="tips">

Manfaat :
{manfaat}

</div>

</div>

{/* CARD 3 */}

<div className="status-card">

<div className="card-title">

<FaTrashAlt/>

<h3>Volume Sampah</h3>

</div>

<h2>

{weight} gram

</h2>

<div className="progress">

<div
className="progress-fill"
style={{

width:`${percent}%`

}}
/>

</div>

<span>

{percent}%

</span>

<p>

Dari target harian 100 gram

</p>

</div>

{/* CARD 4 */}

<div className="status-card">

<div className="card-title">

<FaGlobeAsia/>

<h3>Dampak</h3>

</div>

<p>

{dampak}

</p>

<h2>

0.05 kg CO₂

</h2>

</div>

{/* CARD 5 */}

<div className="status-card">

<div className="card-title">

<FaRecycle/>

<h3>Cara Pencegahan</h3>

</div>

<ul>

{

pencegahan.map((item,index)=>(

<li key={index}>

• {item}

</li>

))

}

</ul>

</div>

<div className="footer-status">

⭐ Terus pilah sampah dan jadikan bagian dari lingkungan yang lebih bersih!

</div>

<button

className="back-home"

onClick={()=>navigate("/")}

>

Kembali

</button>

</div>

    );

}

export default Status;