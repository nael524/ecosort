    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { FaBars, FaTimes } from "react-icons/fa";
    import "../styles/Beranda.css";
    import Camera from "../components/Camera";


    function Beranda() {
        const navigate = useNavigate();

        const [menuOpen, setMenuOpen] = useState(false);

        return (
            <div className="beranda">

                <header className="navbar">
                    <h1 className="title">
                        <strong>Ecosort</strong>
                    </h1>

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </header>

                <div className={`sidebar ${menuOpen ? "active" : ""}`}>
                    <a href="/">Beranda</a>
                    <a href="/Beranda">Camera Ecosort</a>
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
                <div className="camera-container">
                        <Camera />

        
    </div>

            </div>
        );
    }

    export default Beranda;