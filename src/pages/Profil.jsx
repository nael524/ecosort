import React from "react";
import "../styles/Profil.css";
import gambarAbout from "../images/gambar3.jpg";
import gambarAbout1 from "../images/gambar4.jpg";
import gambarAbout2 from "../images/gambar5.jpg";
import gambarAbout3 from "../images/gambar6.jpg";   
import profil from "../images/profil.png";
import gambarAbout4 from "../images/gambar7.png"
import { useNavigate } from "react-router-dom";

function Profil (){
        const navigate = useNavigate();

    return (
        <div className="profil">
            <h1 className="title-profil">Ecosort</h1>
            <div className="profil-about">
                <img src={gambarAbout} alt="User Icon" className="img-profil" />
                <p className="about-text">About Ecosort</p>
                <h1 className="sub-about">EcoSort Membantu  anda untuk mensortir sampah anda</h1>
                <h2 className="description">EcoSort adalah aplikasi cerdas yang dirancang untuk membantu masyarakat dalam mengenali dan memilah sampah secara otomatis menggunakan teknologi Artificial Intelligence (AI) dan kamera. Melalui proses deteksi gambar secara real-time, EcoSort mampu mengidentifikasi jenis sampah yang ditangkap kamera, seperti sampah organik, anorganik, plastik, kertas, kaca, maupun logam.</h2>
                 
               <div className="profil-about2">
                    <img src={gambarAbout1} alt="User Icon" className="img-profil1" />
                    <img src={gambarAbout2} alt="User Icon" className="img-profil2" />
                     <img src={gambarAbout3} alt="User Icon" className="img-profil3" />
               </div>
                    <h1 className="sub1">Eco Sort Membantu anda dalam memilah Sampah</h1>
                <div className="profil-about3">

    <h2>♻️ Tentang EcoSort</h2>

    <p>
        EcoSort adalah aplikasi berbasis Artificial Intelligence (AI) yang
        membantu masyarakat mengenali dan memilah sampah secara otomatis
        melalui kamera smartphone. Dengan teknologi pengenalan gambar,
        EcoSort memberikan informasi mengenai jenis sampah, manfaat daur
        ulang, serta cara pengelolaan sampah yang tepat untuk mendukung
        lingkungan yang lebih bersih dan berkelanjutan.
    </p>

    <div className="about-grid">

        <div className="about-card">
            <h3>Visi</h3>
            <p>
                Menjadi solusi digital terdepan dalam pengelolaan sampah
                berbasis Artificial Intelligence untuk menciptakan lingkungan
                yang bersih, hijau, dan berkelanjutan.
            </p>
        </div>

        <div className="about-card">
            <h3>Misi</h3>
            <ul>
                <li>Meningkatkan kesadaran masyarakat tentang pemilahan sampah.</li>
                <li>Memanfaatkan AI sebagai teknologi pendukung lingkungan.</li>
                <li>Mendukung proses daur ulang yang lebih efektif.</li>
                <li>Menyediakan edukasi lingkungan yang mudah dipahami.</li>
            </ul>
        </div>

        <div className="about-card">
            <h3>Keunggulan</h3>
            <ul>
                <li>Scan sampah menggunakan kamera.</li>
                <li>Deteksi otomatis dengan AI.</li>
                <li>Identifikasi berbagai jenis sampah.</li>
                <li>Edukasi pengelolaan sampah.</li>
                <li>Cepat dan mudah digunakan.</li>
            </ul>
        </div>

        <div className="about-card">
            <h3>Mendukung SDGs</h3>
            <p>
                EcoSort berkontribusi terhadap Sustainable Development Goals,
                khususnya SDG 11 (Kota Berkelanjutan), SDG 12 (Konsumsi dan
                Produksi yang Bertanggung Jawab), serta SDG 13 (Penanganan
                Perubahan Iklim).
            </p>
        </div>

    </div>
<br/>
    <div className="about-footer">

        <div className="info-box">
            <h4>Teknologi</h4>
            <p>React JS • Vite • Artificial Intelligence • Camera API</p>
        </div>
    <br/>
        <div className="info-box">
            <h4>Motto</h4>
            <p>"Scan Smarter, Sort Better, Save the Earth."</p>
        </div>

    </div>

</div>
            </div>
            <div className="developer-section">

    <h2 className="developer-title">Meet The Developer</h2>

    <div className="developer-card">

        <div className="developer-image">
            <img src={profil} alt="Developer" />
        </div>

        <div className="developer-content">

            <h3>Natanael H. Sibagariang</h3>

            <span>Full Stack Web Developer • UI/UX Designer</span>

            <p>
                Pengembang aplikasi EcoSort yang berfokus pada pengembangan
                website modern, desain antarmuka (UI/UX), serta implementasi
                teknologi Artificial Intelligence untuk mendukung solusi
                pengelolaan sampah yang lebih cerdas dan berkelanjutan.
            </p>

            <div className="developer-info">

                <div className="info">
                    <h4>💻 Pengalaman</h4>
                    <p>Freelance Web Developer & Graphic Designer</p>
                </div>

                <div className="info">
                    <h4>🎓 Pendidikan</h4>
                    <p>Universitas Satya Terra Bhinneka</p>
                </div>

                <div className="info">
                    <h4>🚀 Spesialisasi</h4>
                    <p>React JS, UI/UX, Laravel, AI Integration and Android Development</p>
                </div>

            </div>

            <button className="contact-btn"   onClick={() => window.open("https://wa.me/6281539952365", "_blank")}
>
                Contact Developer
            </button>

        </div>

    </div>

</div>
<div className="backdor">
    <p>EcoSort can help people sort waste more easily and accurately.</p>
    <img className="gambarAbout4" src={gambarAbout4}/>
<button
className="get-started6"
onClick={() => navigate("/Beranda")}
>
Get Started
</button></div>
        </div>
    );
}
export default Profil;