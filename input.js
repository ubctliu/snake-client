// import constants
const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE_ON_P, MESSAGE_ON_O} = require("./constants");
// stores the active TCP connection object
let connection;

// set up interface to handle user input from stdin
const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// handles movement inputs + exit inputs
const handleUserInput = (key) => {

  switch (key) {

  // if ctrl + c, terminate
  case "\u0003":
    process.exit();
    break;
    
  // move up
  case MOVE_UP_KEY:
    connection.write("Move: up");
    break;

  // move left
  case MOVE_LEFT_KEY:
    connection.write("Move: left");
    break;

  // move down
  case MOVE_DOWN_KEY:
    connection.write("Move: down");
    break;

  // move right
  case MOVE_RIGHT_KEY:
    connection.write("Move: right");
    break;
  
  // preset message 1 on p
  case "p":
    connection.write(`Say: ${MESSAGE_ON_P}`);
    break;
  
  // preset message 2 on o
  case "o":
    connection.write(`Say: ${MESSAGE_ON_O}!`);
    break;
  
  // otherwise nothing
  default:
    break;
  }
  
};

module.exports = {
  setupInput
};