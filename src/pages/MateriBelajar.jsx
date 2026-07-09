import React from "react";
import {
  FaLeaf,
  FaRecycle,
  FaTrashAlt,
  FaArrowLeft,
  FaSeedling,
  FaGlobeAsia,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/MateriBelajar.css";

function MateriBelajar() {
  const navigate = useNavigate();

  return (
    <div className="materi-page">

      <section className="materi-hero">

        
        <br/>
        <span className="badge">
           EcoSort Learning Center
        </span>

        <h1>Belajar Pengelolaan Sampah</h1>

        <p>
          Kenali berbagai jenis sampah, cara pengelolaannya,
          dan bagaimana setiap orang dapat berkontribusi
          menjaga lingkungan demi masa depan yang lebih hijau.
        </p>

      </section>

      <section className="materi-grid">

        <div className="materi-card">
          <FaLeaf />

          <h2>Sampah Organik</h2>

          <p>
            Sampah organik berasal dari makhluk hidup seperti
            daun, buah, sayur, rumput, ranting,
            serta sisa makanan.

            Sampah ini dapat terurai secara alami dan
            dimanfaatkan kembali menjadi kompos.
          </p>
        </div>

        <div className="materi-card">
          <FaRecycle />

          <h2>Sampah Anorganik</h2>

          <p>
            Sampah anorganik merupakan sampah yang
            sulit terurai seperti plastik,
            kaca, logam,
            botol,
            dan kaleng.

            Sebagian besar dapat didaur ulang.
          </p>
        </div>

        <div className="materi-card">
          <FaTrashAlt />

          <h2>Sampah B3</h2>

          <p>
            Sampah B3 merupakan limbah berbahaya
            seperti baterai,
            lampu,
            obat kadaluarsa,
            oli,
            dan bahan kimia.

            Sampah ini harus dipisahkan
            agar tidak mencemari lingkungan.
          </p>
        </div>

        <div className="materi-card">
          <FaSeedling />

          <h2>Manfaat Daur Ulang</h2>

          <p>
            Daur ulang membantu mengurangi
            jumlah sampah,
            menghemat energi,
            mengurangi polusi,
            dan menjaga sumber daya alam.
          </p>
        </div>

        <div className="materi-card">
          <FaGlobeAsia />

          <h2>Peran EcoSort</h2>

          <p>
            EcoSort menggunakan Artificial Intelligence
            untuk mengenali jenis sampah,
            memberikan edukasi,
            serta membantu masyarakat memilah sampah
            dengan benar.
          </p>
        </div>

        <div className="materi-card">
          <FaRecycle />

          <h2>Tips Menjaga Lingkungan</h2>

          <ul>
            <li>Pilah sampah sesuai jenisnya.</li>
            <li>Kurangi penggunaan plastik.</li>
            <li>Gunakan barang yang dapat dipakai ulang.</li>
            <li>Daur ulang sampah yang masih bernilai.</li>
            <li>Buang sampah pada tempatnya.</li>
          </ul>

        </div>

      </section>

      <section className="quiz-section">

        <h2>Sudah Paham?</h2>

        <p>
          Uji pemahamanmu melalui kuis singkat
          mengenai pengelolaan sampah.
        </p>

        <button
          className="quiz-btn"
          onClick={() => navigate("/Quiz")}
        >
          Mulai Quiz
        </button><br/><br/>
<button
          className="back-btn1"
          onClick={() => navigate("/Edukasi")}
        >
          <FaArrowLeft /> Kembali
        </button>
      </section>

    </div>
  );
}

export default MateriBelajar;