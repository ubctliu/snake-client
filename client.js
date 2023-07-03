const net = require("net");
const {IP, PORT, NAME} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  // creates connection socket with ip & port constant
  const conn = net.createConnection({
    host: IP, // ip address
    port: PORT, // port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // on successful connection, change name to the name constant
  conn.on("connect", () => {
    console.log("Successfully connected to the server!");
    conn.write(`Name: ${NAME}`);
  });
  
  // if messages are received from the system, log to console
  conn.on("data", (data) => {
    console.log(data);
  });

  // returns connection socket object
  return conn;
};

module.exports = {connect};