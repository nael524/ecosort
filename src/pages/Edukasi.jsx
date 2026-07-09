import React, { useState } from "react";
import { FaBars, FaTimes, FaLeaf, FaRecycle, FaGlobeAsia, FaTree, FaSeedling, FaTrashAlt } from "react-icons/fa";
import "../styles/Edukasi.css";
import { useNavigate } from "react-router-dom";
import SDGs from "../images/logo1.png";

function Edukasi() {
    const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();
    const sdgs = [
        {
            no: "11",
            title: "Sustainable Cities",
            color: "#F99D26",
            icon: <FaGlobeAsia />,
            desc: "Mendukung terciptanya kota yang bersih, aman, dan berkelanjutan melalui pengelolaan sampah."
        },
        {
            no: "12",
            title: "Responsible Consumption",
            color: "#BF8B2E",
            icon: <FaRecycle />,
            desc: "Mengajak masyarakat menggunakan sumber daya secara bijak dan mendukung daur ulang."
        },
        {
            no: "13",
            title: "Climate Action",
            color: "#3F7E44",
            icon: <FaLeaf />,
            desc: "Mengurangi pencemaran lingkungan dan emisi karbon melalui pengelolaan sampah."
        }
    ];

    return (
        <div className="edukasi-page">

            {/* ================= NAVBAR ================= */}

            <header className="navbar">

                <h1 className="title">
                    <strong>EcoSort</strong>
                </h1>

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </header>

            {/* ================= SIDEBAR ================= */}

            <div className={`sidebar ${menuOpen ? "active" : ""}`}>

                <a href="/">Beranda</a>

                <a href="/Beranda">Camera EcoSort</a>

                <a href="/Edukasi">Edukasi</a>

 
                <a href="/Profil">Profil</a>

                <a href="/Setting">Pengaturan</a>

            </div>

            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* ================= HERO ================= */}

            <section className="hero-edukasi">

                <div className="hero-left">

                    <span className="badge">
                        🌍 Sustainable Development Goals
                    </span>

                    <h1>
                        Edukasi Pengelolaan Sampah Bersama
                        <span> EcoSort</span>
                    </h1>

                    <p>
                        EcoSort merupakan aplikasi berbasis Artificial Intelligence
                        yang membantu masyarakat mengenali jenis sampah,
                        memahami cara pengelolaannya,
                        serta mendukung Sustainable Development Goals (SDGs)
                        melalui teknologi modern.
                    </p>

                    <div className="hero-button">

                        <button className="btn-primary"     onClick={() => navigate("/Materi")}
>
                            Mulai Belajar
                        </button>

                        <button className="btn-secondary"  onClick={() => navigate("/Sdgs")}>
                            Tentang SDGs
                        </button>

                    </div>

                </div>

                <div className="hero-right">

                    <img
                        src={SDGs}
                        alt="SDGs"
                    />

                </div>

            </section>

            {/* ================= ABOUT ================= */}

            <section className="about-section">

                <div className="section-title">

                    <h2>Apa itu EcoSort?</h2>

                    <p>
                        EcoSort merupakan aplikasi edukasi berbasis Artificial Intelligence
                        yang membantu pengguna mengenali jenis sampah secara otomatis,
                        memberikan informasi pengelolaan sampah,
                        serta meningkatkan kesadaran masyarakat terhadap pentingnya menjaga lingkungan.
                    </p>

                </div>

            </section>

            {/* ================= SDGS ================= */}

            <section className="sdgs-section">

                <div className="section-title">

                    <h2>EcoSort Mendukung SDGs</h2>

                    <p>
                        EcoSort berkontribusi terhadap beberapa tujuan Sustainable
                        Development Goals yang berhubungan dengan pengelolaan sampah,
                        lingkungan hidup, dan perubahan iklim.
                    </p>

                </div>

                <div className="sdgs-grid">

                    {sdgs.map((item, index) => (

                        <div
                            className="sdgs-card"
                            key={index}
                            style={{ borderTop: `6px solid ${item.color}` }}
                        >

                            <div
                                className="sdgs-icon"
                                style={{ background: item.color }}
                            >
                                {item.icon}
                            </div>

                            <h1>{item.no}</h1>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= JENIS SAMPAH ================= */}

            <section className="jenis-section">

                <div className="section-title">

                    <h2>Mengenal Jenis Sampah</h2>

                    <p>
                        Sebelum membuang sampah,
                        penting untuk mengetahui jenisnya agar proses daur ulang
                        dapat berjalan dengan baik.
                    </p>

                </div>

                <div className="jenis-grid">

                    <div className="jenis-card">

                        <FaLeaf />

                        <h3>Sampah Organik</h3>

                        <p>
                            Sampah yang berasal dari makhluk hidup
                            seperti daun, buah, sayur,
                            dan sisa makanan.
                        </p>

                    </div>

                    <div className="jenis-card">

                        <FaRecycle />

                        <h3>Sampah Anorganik</h3>

                        <p>
                            Sampah yang sulit terurai seperti
                            plastik, botol,
                            kaca, logam,
                            dan kaleng.
                        </p>

                    </div>

                    <div className="jenis-card">

                        <FaTrashAlt />

                        <h3>Sampah B3</h3>

                        <p>
                            Sampah berbahaya seperti
                            baterai,
                            lampu,
                            obat,
                            oli,
                            dan bahan kimia lainnya.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Edukasi;