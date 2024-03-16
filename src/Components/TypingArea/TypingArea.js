import "./TypingArea.css";

const TypingArea = () => {
  const sampleText = [
    ["A", "A", "S", "S", "Space"],
    ["J", "J", "K", "K", "Space"],
    ["D", "D", "F", "F", "Space"],
    ["L", "L", ";", ";", "Space"],
  ];
  return (
    <div className="typingArea_container">
      {sampleText.map((row, rowIndex) => (
        <div key={rowIndex} className={`row-${rowIndex}`}>
          {row.map((item, index) => (
            <button key={item} className={item}>
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TypingArea;
