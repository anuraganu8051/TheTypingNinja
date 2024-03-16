import "./Exercise.css";

const Exercise = (props) => {
  const exercises = [
    `${props.chapter}`,
    "Exercise - 1",
    "Exercise - 2",
    "Exercise - 3",
    "Exercise - 4",
    "Exercise - 5",
    "Exercise - 6",
  ];
  return (
    <div className="sidebar_exercise_container">
      <p
        className="back_button"
        onClick={() => {
          props.showExeciseSideBar(false);
          props.keyboard(false);
        }}
      >
        Back
      </p>
      <ul className="chapter_exercise_list">
        {exercises.map((item, index) => (
          <li
            key={index}
            className={item == props.chapter ? "header" : ""}
            onClick={() => {
              props.keyboard(true);
              //   props.showExeciseSideBar(false);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise;
