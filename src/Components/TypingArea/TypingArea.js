import { useState, useEffect } from "react";
import TextGenerator from "../../utils/TextGenerator";
import data from "../../utils/data";

import "./TypingArea.css";

const TypingArea = (props) => {
  // const [toggleSampleText, setToggelSampleText] = useState(false);
  const [data, setData] = useState(props.data);
  const [disabledBtton, setDisabledButton] = useState(0);
  const [sampleText, setSampleText] = useState(TextGenerator(data));

  if (data !== props.data) {
    setData(props.data);
  }

  useEffect(() => {
    setSampleText(TextGenerator(data)); // Update sampleText when props.data changes
  }, [data]); // Add props.data to the dependency array

  useEffect(() => {
    let totalText = sampleText.flat();
    if (totalText[0].length > 1) {
      totalText = totalText.map((item) => {
        return item.split("");
      });
      totalText = totalText.flat();
    }
    setDisabledButton(0);

    const handleKeyDown = (event) => {
      if (totalText[0] === event.key) {
        totalText.shift();
        setDisabledButton(
          sampleText[0].length * sampleText.length - totalText.length
        );
      } else if (event.key === " " && totalText[0] === "Space") {
        totalText.shift();
        setDisabledButton(
          sampleText[0].length * sampleText.length - totalText.length
        );
      }

      if (totalText.length === 0) {
        const generatedText = TextGenerator(data);
        setDisabledButton(0);

        setSampleText(generatedText);
        totalText = generatedText.flat();
      }
      console.log("totalText => ", totalText);
    };

    // Register event listener when the component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Unregister event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sampleText, data]); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className="typingArea_container">
      {sampleText.map((row, rowIndex) => (
        <div key={rowIndex} className={`row-${rowIndex}`}>
          {row.map((item, index) => {
            let buttonIndex =
              rowIndex + index + (row.length - 1) * rowIndex + 1;
            return (
              <button
                key={item + rowIndex + index}
                className={item}
                index={buttonIndex}
                disabled={buttonIndex <= disabledBtton ? true : false}
              >
                {item}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TypingArea;
