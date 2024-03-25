import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import "./Info.css";
const Info = () => {
  const [play, setPlay] = useState(true);
  const [counter, setCounter] = useState(300);
  const [isRunning, setIsRunning] = useState(false); // State to track whether timer is running

  useEffect(() => {
    let interval;
    if (isRunning && counter > 0) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    // Clear interval when counter reaches 0
    if (counter === 0) {
      clearInterval(interval);
    }

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [isRunning, counter]);

  const handlePlay = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  // Format the counter to display minutes and seconds
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;

  return (
    <div className="info_container">
      {play ? (
        <div
          onClick={() => {
            setPlay(false);
            handlePlay();
          }}
        >
          <FontAwesomeIcon icon={faCirclePlay} className="play_icon" />
        </div>
      ) : (
        <div
          onClick={() => {
            setPlay(true);
            handlePause();
          }}
        >
          <FontAwesomeIcon icon={faCirclePause} className="pause_icon" />
        </div>
      )}

      <p className="clock_counter">
        Time Left: {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
      <div
        onClick={() => {
          setCounter(300);
          setIsRunning(false);
          setPlay(true);
        }}
      >
        <FontAwesomeIcon icon={faArrowsRotate} className="clock_reset_icon" />
      </div>
    </div>
  );
};

export default Info;
