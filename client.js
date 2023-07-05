const net = require("net");
const {IP, PORT, NAME} = require("./constants");

// establishes a connection with the game server, returns connection socket object
const connect = function() {
  // creates connection socket with ip & port constant
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the server!");
    conn.write(`Name: ${NAME}`);
  });
  
  // if messages are received from the system, log to console
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};