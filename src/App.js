import logo from "./logo.svg";

import { useState } from "react";
import TypingArea from "./Components/TypingArea/TypingArea";
import Keyboard from "./Components/KeyBoard/KeyBoard";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Pages/HomePage/HomePage";
import ExercisePage from "./Pages/ExercisePage/ExercisePage";
import Info from "./Components/Info/Info";

import "./App.css";
import data from "./utils/data";

function App() {
  const [homePage, setHomePage] = useState(true);
  const [exerciseData, setExerciseData] = useState("");
  const [showKeyBoard, setShowKeyBoard] = useState(false);

  // let exerciseData = [];

  const exercise = (data) => {
    setExerciseData(data);
  };

  console.log("App => ", exerciseData);

  return (
    <div className="App">
      <Sidebar
        pageName={setHomePage}
        keyboard={setShowKeyBoard}
        exercise={exercise}
      />
      {!showKeyBoard && <div>{homePage ? <ExercisePage /> : <HomePage />}</div>}

      {showKeyBoard && (
        <div>
          <TypingArea data={exerciseData} />
          <Info />
          <Keyboard />
        </div>
      )}
    </div>
  );
}

export default App;
