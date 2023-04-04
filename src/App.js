//import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/index";
import { useState } from "react";

let arr = [
  { id: 1, title: "Dağ1", par: "Açıklama 1" },
  { id: 2, title: "Dağ2", par: "Açıklama 2" },
  { id: 3, title: "Dağ3", par: "Açıklama 3" },
];

//const kare = (sayi) => sayi * sayi;
const App = () => {
  const [lesson, setLesson] = useState(1);
  return (
    <div>
      <h1>Başlık</h1>
      <h2>Ders {lesson}</h2>
      <button
        onClick={() => {
          setLesson(lesson + 1);
        }}
      >
        Ders Arttır
      </button>
      <button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        Ders Azalt
      </button>
      <button
        onClick={() => {
          setLesson(100);
        }}
      >
        Ders 100
      </button>
      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(({ title, par }, i) => (
          <Card
            key={`index ${i}`}
            title={title}
            par={par}
            lesson={lesson}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
