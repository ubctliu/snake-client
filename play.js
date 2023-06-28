const { stdin } = require("process");
const {connect} = require("./client");

console.log("Connecting...");
connect();

// set up interface to handle user input from stdin

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume;
  return stdin;
};

stdin.on("data", (data) => {
  handleUserInput(data);
});

const handleUserInput = (key) => {

  switch (key) {
  // if ctrl + c, terminate
  case "\u0003": process.exit();
    break;
  }
  
};

setupInput();