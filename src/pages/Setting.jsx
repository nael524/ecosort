import React,{useState,useEffect} from "react";
import {FaBars,FaTimes,FaMoon,FaSun,FaCamera,FaRobot,FaInfoCircle} from "react-icons/fa";
import "../styles/Setting.css";
 
function Setting(){

const [menuOpen,setMenuOpen]=useState(false);

 
const [boundingBox,setBoundingBox]=useState(true);
const [label,setLabel]=useState(true);
const [sound,setSound]=useState(false);
const [confidence,setConfidence]=useState(70);
 
const [darkMode,setDarkMode]=useState(
    localStorage.getItem("theme")==="dark"
);
useEffect(()=>{

    if(darkMode){
        document.body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }else{
        document.body.classList.remove("dark");
        localStorage.setItem("theme","light");
    }

},[darkMode]);
 
return(

<div className="setting-page">

<header className="navbar">

<h1 className="title">
<strong>EcoSort</strong>
</h1>

<button
className="menu-btn"
onClick={()=>setMenuOpen(!menuOpen)}
>
{menuOpen?<FaTimes/>:<FaBars/>}
</button>

</header>

<div className={`sidebar ${menuOpen?"active":""}`}>

<a href="/">Beranda</a>
<a href="/Beranda">Camera EcoSort</a>
<a href="/Edukasi">Edukasi</a>
<a href="/Profil">Profil</a>
<a href="/Setting">Pengaturan</a>

</div>

{
menuOpen&&

<div
className="overlay"
onClick={()=>setMenuOpen(false)}
></div>

}

<div className="setting-container">

<h1>⚙ Pengaturan</h1>

<div className="setting-card">

<h2><FaMoon/> Tampilan</h2>

<div className="setting-item">

<span>Mode Gelap</span>

<label className="switch">
    <input
        type="checkbox"
        checked={darkMode}
        onChange={()=>setDarkMode(!darkMode)}
    />
    <span className="slider"></span>
</label>

</div>

</div>

<div className="setting-card">

<h2><FaCamera/> Kamera</h2>

<div className="setting-item">

<span>Bounding Box</span>

<label className="switch">

<input
type="checkbox"
checked={boundingBox}
onChange={()=>setBoundingBox(!boundingBox)}
/>

<span className="slider"></span>

</label>

</div>

<div className="setting-item">

<span>Label Objek</span>

<label className="switch">

<input
type="checkbox"
checked={label}
onChange={()=>setLabel(!label)}
/>

<span className="slider"></span>

</label>

</div>

</div>

<div className="setting-card">

<h2><FaRobot/> AI Detection</h2>

<p>Confidence : {confidence}%</p>

<input
type="range"
min="10"
max="100"
value={confidence}
onChange={(e)=>setConfidence(e.target.value)}
/>

</div>

 

<div className="setting-card">

<h2><FaInfoCircle/> Tentang</h2>

<p><b>EcoSort AI</b></p>

<p>Version 1.0</p>

<p>Universitas Satya Terra Bhinneka</p>

<p>Developed by</p>

<p>IF D SIANG</p>

</div>

</div>

</div>

);

}

export default Setting;