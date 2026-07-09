import { useEffect, useState } from "react";
import { useRef } from "react";

import "../styles/Home.css";
import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";
import gambar1 from "../images/gambar1.png";
import gambar2 from "../images/gambar2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

function Home() {
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="splash-screen">
                <img src={logo} alt="Ecosort" className="splash-logo" />
                <h1 className="app-title">ECOSORT</h1>
                <p className="loading-text">Smart Camera Ai</p>

                <div className="loader">
                    <span></span>
                </div>
            </div>
        );
    }

    return (
        <div className="container-home">


            <Swiper
                modules={[Pagination]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <h1 className="app-title1"><strong>Ecosort</strong></h1>
                <SwiperSlide>
                    <div className="slide">

                        <img src={gambar1} className="hero-img1" />

                        <h2 style={{ marginTop: "210px" }}>Kelola Sampah Lebih Mudah</h2>

                        <p>
                            Inovasi Pemilahan
                            Sampah Berbasis
                            Artificial Intelligence.
                        </p>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide">

                        <img src={gambar2} className="hero-img2" />

                        <h2 style={{ marginTop: "250px" }}>Pilah Sampah dengan Benar</h2>

                        <p style={{ marginTop: "-0px" }}>
                            EcoSort membantu
                            Anda mengenali jenis sampah hanya melalui kamera.
                        </p>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide">

                        <img src={gambar2} className="hero-img3" />

                        <h2 style={{ color: "#000000" }}>Dukung SDGs</h2>

                        <p style={{ color: "#000000",op :"-20px" }}>
                            EcoSort membantu
                            Anda mengenali jenis sampah hanya melalui Kamera.
                        </p>

                        <button className="get-started" onClick={() => navigate("/Beranda")}
                        >Get Started</button>
<button
className="view-profile"
onClick={() => navigate("/Profil")}
>
View Profil
</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            

        </div>
    );
}

export default Home;