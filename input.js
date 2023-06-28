// set up interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {

  switch (key) {
  // if ctrl + c, terminate
  case "\u0003":
    process.exit();
    break;
  default:
    console.log(`Pressed ${key}`);
  }
  
};

module.exports = {
  setupInput
};