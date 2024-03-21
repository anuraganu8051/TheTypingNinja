const TextGenerator = (data) => {
  const sampleTextArray = [];
  const homeRowKeys = data; //["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];
  const numRows = 4; // Number of rows
  const numOfItem = 4;

  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < numOfItem; j++) {
      row.push(homeRowKeys[Math.floor(Math.random() * homeRowKeys?.length)]); // Add a random home row key
    }
    if (data[0].length === 1) {
      row.push("Space"); // Add "Space" to each row
    }
    sampleTextArray.push(row);
  }
  //   totalText = sampleTextArray.flat();
  return sampleTextArray;
};

export default TextGenerator;
