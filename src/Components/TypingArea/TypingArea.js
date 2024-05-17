import { useState, useEffect } from "react";
import TextGenerator from "../../utils/TextGenerator";
import data from "../../utils/data";

import "./TypingArea.css";

const TypingArea = (props) => {
  const sampleData = props.data;
  // const [toggleSampleText, setToggelSampleText] = useState(false);
  const [data, setData] = useState(sampleData);
  const [disabledBtton, setDisabledButton] = useState(0);
  const [sampleText, setSampleText] = useState(TextGenerator(data));
  const [typpedText, setTyppedText] = useState("");
  // const [disabledLetter, setDisabledLetter] = useState(0);
  const [totalRemainingText, setTotalRemainingText] = useState();

  if (data !== props.data) {
    setData(sampleData);
  }

  useEffect(() => {
    setSampleText(TextGenerator(data)); // Update sampleText when props.data changes
  }, [data]); // Add props.data to the dependency array

  useEffect(() => {
    const sampleTextCopy = [...sampleText].flat();
    let totalText = sampleText.flat();

    if (totalText[0].length > 1) {
      totalText = totalText.map((item) => {
        return item.split("");
      });
      totalText = totalText.flat();
    }
    let sampleTextCopyLength = totalText.length;
    setDisabledButton(0);

    const handleKeyDown = (event) => {
      if (totalText[0] === event.key) {
        setTyppedText((prevValue) => prevValue + event.key);

        totalText.shift();
        if (sampleText.flat().length === 20) {
          setDisabledButton(
            sampleText[0].length * sampleText.length - totalText.length
          );
          setTyppedText("");
        }
        console.log(
          "LOGGING LENGTH => ",
          totalText.length,
          sampleTextCopyLength - sampleTextCopy[0].length
        );
        if (
          totalText.length ===
          sampleTextCopyLength - sampleTextCopy[0].length
        ) {
          sampleTextCopy.shift();
          sampleTextCopyLength = totalText.length;
          setDisabledButton(
            sampleText[0].length * sampleText.length - sampleTextCopy.length
          );
          setTyppedText("");
        }
      } else if (event.key === " " && totalText[0] === "Space") {
        totalText.shift();
        sampleTextCopy.shift();
        sampleTextCopyLength = sampleTextCopyLength - 1;
        setDisabledButton(
          sampleText[0].length * sampleText.length - totalText.length
        );
      }

      // if (count == sampleTextCopy[0].length - 1) {
      //   count = 0;
      //   setDisabledLetter(0);
      // }
      if (totalText.length === 0) {
        const generatedText = TextGenerator(data);
        setDisabledButton(0);
        setSampleText(generatedText);
        totalText = generatedText.flat();
      }

      console.log("total text => ", totalText);
      console.log("SAMPLE text COPY => ", sampleTextCopy);
      console.log("Disabled letter => ", sampleTextCopy[0]);

      // console.log("totalText => ", totalText);
      setTotalRemainingText(totalText);
      // console.log("totalRemainingText => ", totalRemainingText);
    };
    setTotalRemainingText(totalText);

    // Register event listener when the component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Unregister event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sampleText, data]); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className="typingArea_container">
      {sampleText.length !== 1 ? (
        sampleText.map((row, rowIndex) => (
          <div key={rowIndex} className={`row-${rowIndex}`}>
            {row.map((item, index) => {
              let buttonIndex =
                rowIndex + index + (row.length - 1) * rowIndex + 1;

              return (item.length > 1) & (item != "Space") ? (
                <button
                  key={item + rowIndex + index}
                  className={item}
                  index={buttonIndex}
                  disabled={buttonIndex <= disabledBtton ? true : false}
                >
                  {item.split("").map((e, i) => (
                    <s
                      key={e + i}
                      // className={
                      //   typpedText == e &&
                      //   buttonIndex == disabledBtton + 1 &&
                      //   i <= 2
                      //     ? "disabled"
                      //     : console.log(
                      //         "Disabled button =>"
                      //         // item.length,
                      //         // sampleText[rowIndex][disabledBtton],
                      //         // sampleText.flat(1)[disabledBtton],
                      //         // buttonIndex,
                      //         // disabledBtton,
                      //         // totalRemainingText
                      //       )
                      // console.log(
                      //   "row index => ",
                      //   rowIndex,
                      //   "index => ",
                      //   index,
                      //   "i => ",
                      //   i,
                      //   "button index =>",
                      //   buttonIndex,
                      //   "disabled button => ",
                      //   disabledBtton,
                      //   "disabled letter => ",
                      //   disabledLetter,
                      //   "button index => ",
                      //   buttonIndex
                      // )
                      // }
                    >
                      {e}
                    </s>
                  ))}
                </button>
              ) : (
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
        ))
      ) : (
        <button
          key={sampleText}
          className=""
          index=""
          style={{ fontSize: "25px" }}
          // disabled={buttonIndex <= disabledBtton ? true : false}
        >
          {sampleText}
        </button>
      )}
      {console.log("typpedText => ", typpedText)}
      {typpedText.length > 0 && <h2>{typpedText}</h2>}
    </div>
  );
};

export default TypingArea;
