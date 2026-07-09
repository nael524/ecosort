import React, { useState, useEffect } from "react";
import "../styles/Quiz.css";
import { useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaRecycle,
  FaTrashAlt,
  FaArrowLeft,
  FaSeedling,
  FaGlobeAsia,
} from "react-icons/fa";
const questions = [
  {
    question: "Sampah botol plastik sebaiknya dibuang ke...",
    options: [
      "Tempat Sampah Organik",
      "Tempat Sampah Plastik",
      "Tempat Sampah Kertas",
      "Tempat Sampah Kaca",
    ],
    answer: 1,
  },
  {
    question: "Kulit pisang termasuk jenis sampah...",
    options: [
      "Anorganik",
      "Organik",
      "Logam",
      "Elektronik",
    ],
    answer: 1,
  },
  {
    question: "Kaleng minuman termasuk kategori...",
    options: [
      "Logam",
      "Organik",
      "Kertas",
      "Kaca",
    ],
    answer: 0,
  },
  {
    question: "Manakah yang dapat didaur ulang?",
    options: [
      "Daun Kering",
      "Sisa Nasi",
      "Botol Plastik",
      "Kulit Buah",
    ],
    answer: 2,
  },
  {
    question: "Tujuan utama memilah sampah adalah...",
    options: [
      "Menambah Sampah",
      "Mempermudah Daur Ulang",
      "Mencemari Lingkungan",
      "Menghabiskan Lahan",
    ],
    answer: 1,
  },
];

function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [time, setTime] = useState(20);

  useEffect(() => {

    if (finish) return;

    if (time === 0) {
      nextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    },1000);

    return () => clearInterval(timer);

  },[time]);

  const handleSelect = (index)=>{
      setSelected(index);
  }

  const nextQuestion = ()=>{

      if(selected===questions[currentQuestion].answer){
          setScore(score+1);
      }

      if(currentQuestion===questions.length-1){
          setFinish(true);
      }else{
          setCurrentQuestion(currentQuestion+1);
          setSelected(null);
          setTime(20);
      }

  }

  const restartQuiz = ()=>{
      setCurrentQuestion(0);
      setSelected(null);
      setScore(0);
      setFinish(false);
      setTime(20);
  }

  const progress=((currentQuestion+1)/questions.length)*100;

  return (

<div className="quiz-page">

<div className="quiz-container">

<h2>Eco Sort Quiz</h2>

<p className="quiz-desc">
Uji pemahaman Anda mengenai pengelolaan dan pemilahan sampah untuk mendukung lingkungan yang lebih bersih.
</p>

{
!finish ? (

<>

<div className="quiz-header">

<div>

<h4>
Pertanyaan {currentQuestion+1} / {questions.length}
</h4>

</div>

<div className="timer">

{time}s

</div>

</div>

<div className="progress">

<div
className="progress-fill"
style={{width:`${progress}%`}}
></div>

</div>

<h3 className="question">
{questions[currentQuestion].question}
</h3>

<div className="options">

{
questions[currentQuestion].options.map((option,index)=>(

<button
key={index}
className={`option ${selected===index ? "active":""}`}
onClick={()=>handleSelect(index)}
>

{option}

</button>

))
}

</div>

<button
className="next-btn"
disabled={selected===null}
onClick={nextQuestion}
>

Lanjut

</button>

</>

):(

<div className="result">

<h2>Quiz Selesai</h2>

<h1>{score} / {questions.length}</h1>

<p>

{
score===questions.length
?
"Pemahaman Anda sangat baik mengenai pemilahan sampah."

:
score>=3
?
"Pemahaman Anda sudah cukup baik. Terus tingkatkan pengetahuan mengenai pengelolaan sampah."

:
"Pelajari kembali materi Eco Sort agar lebih memahami proses pemilahan sampah."
}

</p>

<button
className="restart-btn"
onClick={restartQuiz}
>

Ulangi Quiz

</button>
 <br/><br/>
 <button
           className="back-btn1"
           onClick={() => navigate("/Edukasi")}
         >
           <FaArrowLeft /> Kembali
         </button>

</div>

)

}

</div>

</div>

  );
}

export default Quiz;