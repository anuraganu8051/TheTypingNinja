const TextGenerator = (data) => {
  const sampleTextArray = [];
  const homeRowKeys = data; //["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];
  const numRows = 4; // Number of rows
  const numOfItem = 4;

  if (homeRowKeys instanceof Array) {
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
    // console.log("sample text from text generator =>", homeRowKeys);
    return sampleTextArray;
  }

  console.log("homeRowKeys from text generator =>", homeRowKeys);
  return [homeRowKeys];
};

export default TextGenerator;
