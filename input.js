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
    
  case "w":
    connection.write("Move: up");
    break;

  case "a":
    connection.write("Move: left");
    break;

  case "s":
    connection.write("Move: down");
    break;

  case "d":
    connection.write("Move: right");
    break;

  default:
    break;
  }
  
};

module.exports = {
  setupInput
};