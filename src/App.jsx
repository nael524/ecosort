import Home from './pages/Home';
import Beranda from './pages/Beranda';
import './App.css'
import Profil from './pages/Profil';
import Edukasi from './pages/Edukasi';
import Setting from './pages/Setting';
import MateriBelajar from "./pages/MateriBelajar";
import Quiz from './pages/Quiz';
import { Routes, Route } from 'react-router-dom'
import Sdgs from './pages/Sdgs';
import Status from './pages/Status';
import Klasifikasi from './components/Klasifikasi';
function App() {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Beranda" element={<Beranda />} />
      <Route path="/Profil" element={<Profil />} />
      <Route path="/Edukasi" element={<Edukasi/>}/>
      <Route path="/Setting" element={<Setting/>}/>
      <Route path="/Materi" element={<MateriBelajar />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/Sdgs" element={<Sdgs />} />
      <Route path="/status" element={<Status/>}/>
      <Route path="/klasifikasi" element={<Klasifikasi/>}/>
    </Routes>


  )
}

export default App
