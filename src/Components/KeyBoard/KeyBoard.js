import React from "react";

import "./KeyBoard.css";

const Keyboard = () => {
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
      "Back",
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
      "Caps",
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
    ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Ctrl"],
  ];

  const lowercaseAlphabetKeys = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Back"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
    ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Ctrl"],
  ];

  return (
    <div className="keyboard_container">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((item) => (
            <button key={item} className={item} row={`row-${rowIndex}`}>
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
