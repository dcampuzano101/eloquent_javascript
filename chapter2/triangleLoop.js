const loopTriangle = () => {
  let char = "#";
  while (char.length <= 7) {
    console.log(char);
    char += "#";
  }
};
loopTriangle();
