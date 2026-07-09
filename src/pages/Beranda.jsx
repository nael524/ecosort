    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { FaBars, FaTimes } from "react-icons/fa";
    import "../styles/Beranda.css";
    import Camera from "../components/Camera";
    import { Link } from "react-router-dom";

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

                    <Link to="/">Beranda</Link>

                    <Link to="/Beranda">Camera EcoSort</Link>

                    <Link to="/Edukasi">Edukasi</Link>

                    <Link to="/Profil">Profil</Link>

                    <Link to="/Setting">Pengaturan</Link>

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