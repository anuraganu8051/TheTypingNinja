import React from "react";
import { useState, useEffect } from "react";

import "./KeyBoard.css";

const Keyboard = () => {
  const [activeItem, setActiveItem] = useState(undefined);
  const functionalKey = [
    "CapsLock",
    "Shift",
    "Tab",
    "Control",
    "Alt",
    "Enter",
    "Backspace",
  ];
  let keyDownFlag = false;
  const handleKeyDown = (index) => {
    if (!keyDownFlag) {
      keyDownFlag = false;
      // console.log("index key board =>", index);
      setActiveItem(index);
      // console.log("activeItem =>", activeItem);
      // setTimeout(function () {
      //   keyDownFlag = false;
      // }, 500);
    }
  };
  const handleKeyUp = (index) => {
    // console.log("index key board =>", index);
    keyDownFlag = false;
    setActiveItem(undefined);
  };
  const keyboardLayout = [
    [
      "` ~",
      "1 !",
      "2 @",
      "3 #",
      "4 $",
      "5 %",
      "6 ^",
      "7 &",
      "8 *",
      "9 (",
      "0 )",
      "- _",
      "= +",
      "Backspace",
    ],
    [
      "Tab",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "[ {",
      "] }",
      "\\ |",
    ],
    [
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "; :",
      "' \"",
      "Enter",
    ],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ", <", ". >", "/ ?", "Shift"],
    ["Control", "Win", "Alt", " Space ", "Alt", "Win", "Control"],
  ];

  const lowercaseAlphabetKeys = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Back"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
    ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Ctrl"],
  ];

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (functionalKey.indexOf(event.key) === -1) {
        handleKeyDown(event.key.toUpperCase());
      } else {
        handleKeyDown(event.key);
      }
    });

    document.addEventListener("keyup", (event) => {
      if (functionalKey.indexOf(event.key) === -1) {
        handleKeyUp(event.key.toUpperCase());
      } else {
        handleKeyUp(event.key);
      }
    });
  }, []);

  return (
    <div className="keyboard_container">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((item, index) => {
            return (
              <button
                key={item + index}
                className={
                  item.replace(" ", "").indexOf(activeItem) !== -1 &&
                  (item.length === activeItem?.length ||
                    item.replace(" ", "").length === 2 ||
                    activeItem === " ")
                    ? item + " active"
                    : item
                }
                row={`row-${rowIndex}`}
                name={item}
                index={index}
              >
                {/* {console.log("item class => ", `${item + " active"}`)} */}
                {item.indexOf(" ") == 1 ? (
                  <div>
                    <sub>{item.split(" ")[0]}</sub>{" "}
                    <sup>{item.split(" ")[1]}</sup>
                  </div>
                ) : (
                  item
                )}
                {/* {item} */}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
