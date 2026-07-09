import React from "react";
import { Link } from "react-router-dom";
import {
    FaRecycle,
    FaLeaf,
    FaGlobeAsia,
    FaWater,
    FaTree,
    FaArrowLeft,
    FaChartLine
} from "react-icons/fa";

import "../styles/Sdgs.css";

function Sdgs() {

    const sdgs = [
        {
            icon: <FaRecycle />,
            title: "SDG 11",
            subtitle: "Kota dan Permukiman Berkelanjutan",
            desc: "Pengelolaan sampah yang baik menciptakan lingkungan kota yang lebih sehat, bersih, aman, dan nyaman bagi seluruh masyarakat."
        },
        {
            icon: <FaLeaf />,
            title: "SDG 12",
            subtitle: "Konsumsi dan Produksi Bertanggung Jawab",
            desc: "Pemilahan sampah menjadi langkah awal dalam mendukung proses daur ulang dan penggunaan sumber daya secara berkelanjutan."
        },
        {
            icon: <FaGlobeAsia />,
            title: "SDG 13",
            subtitle: "Penanganan Perubahan Iklim",
            desc: "Pengurangan sampah yang berakhir di tempat pembuangan akhir dapat menekan emisi gas rumah kaca."
        },
        {
            icon: <FaTree />,
            title: "SDG 15",
            subtitle: "Menjaga Ekosistem Daratan",
            desc: "Mengurangi pencemaran tanah membantu menjaga kualitas lingkungan dan habitat makhluk hidup."
        },
        {
            icon: <FaWater />,
            title: "SDG 6",
            subtitle: "Air Bersih dan Sanitasi",
            desc: "Sampah yang terkelola dengan baik dapat mengurangi pencemaran sungai dan sumber air."
        },
        {
            icon: <FaChartLine />,
            title: "SDG 17",
            subtitle: "Kemitraan",
            desc: "Kolaborasi masyarakat, sekolah, pemerintah, dan sektor swasta diperlukan untuk mewujudkan pembangunan berkelanjutan."
        }
    ];

    return (

<div className="sdgs-page">

<div className="sdgs-hero">

<h1>
Sustainable Development Goals
</h1>

<p>

SDGs merupakan agenda pembangunan global yang bertujuan menciptakan kehidupan yang lebih baik bagi seluruh masyarakat melalui pembangunan yang berkelanjutan. Eco Sort hadir sebagai media edukasi yang mendukung pencapaian tujuan tersebut melalui peningkatan kesadaran dalam pengelolaan sampah.

</p>

</div>

<div className="sdgs-content">

<div className="info-box">

<h2>
Mengapa SDGs Penting?
</h2>

<p>

Permasalahan lingkungan seperti penumpukan sampah, pencemaran tanah, pencemaran air, serta perubahan iklim merupakan tantangan yang membutuhkan partisipasi seluruh masyarakat. Melalui edukasi mengenai pemilahan sampah, setiap individu dapat berkontribusi secara langsung terhadap pencapaian berbagai target Sustainable Development Goals.

</p>

</div>

<h2 className="section-title">
SDGs yang Didukung Eco Sort
</h2>

<div className="sdgs-grid">

{
sdgs.map((item,index)=>(

<div
className="sdgs-card"
key={index}
>

<div className="icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<h4>{item.subtitle}</h4>

<p>{item.desc}</p>

</div>

))
}

</div>

<div className="statistik">

<div className="stat-card">

<h2>17</h2>

<p>Tujuan SDGs Global</p>

</div>

<div className="stat-card">

<h2>169</h2>

<p>Target Pembangunan</p>

</div>

<div className="stat-card">

<h2>2030</h2>

<p>Tahun Pencapaian</p>

</div>

</div>

<div className="cta">

<h2>

Mari Mulai dari Hal Kecil

</h2>

<p>

Pemilahan sampah merupakan tindakan sederhana yang memberikan dampak besar terhadap keberlanjutan lingkungan dan masa depan generasi berikutnya.

</p>

<Link to="/Edukasi">

<button>

<FaArrowLeft />

Kembali 
</button>

</Link>

</div>

</div>

</div>

    );
}

export default Sdgs;