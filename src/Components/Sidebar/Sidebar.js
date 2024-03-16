import { useState } from "react";
import Exercise from "./Exercise/Exercise";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [showExercise, setShowExecise] = useState(false);
  const [header, setHeader] = useState("");

  const toggleDropdown = (chapter) => {
    setHeader(chapter);
    setShowExecise(true);
  };
  props.pageName(showExercise);

  const chapters = [
    "Home Row",
    "Top Row",
    "Home and Top Row",
    "Bottom Row",
    "Home, Top and Bottom Row",
    "Number Row",
    "All Row",
  ];

  return showExercise ? (
    <Exercise
      chapter={header}
      showExeciseSideBar={setShowExecise}
      keyboard={props.keyboard}
    />
  ) : (
    <div className="sidebar_container">
      <ul className="chapter_list">
        {chapters.map((item, index) => (
          <li key={index} onClick={() => toggleDropdown(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
