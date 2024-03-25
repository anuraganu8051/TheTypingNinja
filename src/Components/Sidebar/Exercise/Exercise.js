import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import data from "../../../utils/data";
import "./Exercise.css";

const Exercise = (props) => {
  const [activeItem, setActiveItem] = useState(1);

  const exercises = [
    `${props.chapter}`,
    "Exercise - 1",
    "Exercise - 2",
    "Exercise - 3",
    "Exercise - 4",
    "Exercise - 5",
    "Exercise - 6",
  ];

  const handleClick = (value, index) => {
    const chapter = exercises[0].toLowerCase().replace(/\s/g, "");
    const exercise = value.toLowerCase().replace(/[^a-z0-9]/g, "");

    props.exercise(data[chapter][exercise]);
    props.keyboard(true);
    setActiveItem(index);
  };
  useEffect(() => {
    if (activeItem === 1) {
      handleClick("Exercise - 1", activeItem);
    }
  });

  return (
    <div className="sidebar_exercise_container">
      <p
        className="back_button"
        onClick={() => {
          props.showExeciseSideBar(false);
          props.keyboard(false);
        }}
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} />
        Back
      </p>
      <ul className="chapter_exercise_list">
        {exercises.map((item, index) => (
          <li
            key={index}
            className={
              item == props.chapter
                ? "header"
                : index === activeItem
                ? "active"
                : ""
            }
            onClick={
              item.indexOf("Exercise") === -1
                ? () => {}
                : () => {
                    handleClick(item, index);
                  }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise;
