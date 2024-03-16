import logo from "./logo.svg";

import { useState } from "react";
import TypingArea from "./Components/TypingArea/TypingArea";
import Keyboard from "./Components/KeyBoard/KeyBoard";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Pages/HomePage/HomePage";
import ExercisePage from "./Pages/ExercisePage/ExercisePage";
import "./App.css";

function App() {
  const [homePage, setHomePage] = useState(true);
  const [showKeyBoard, setShowKeyBoard] = useState(false);

  return (
    <div className="App">
      <Sidebar pageName={setHomePage} keyboard={setShowKeyBoard} />
      {!showKeyBoard && <div>{homePage ? <ExercisePage /> : <HomePage />}</div>}

      {showKeyBoard && (
        <div>
          <TypingArea />
          <Keyboard />
        </div>
      )}
    </div>
  );
}

export default App;
