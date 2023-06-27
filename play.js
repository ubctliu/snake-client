const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // ip address
    port: 50541, // port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting...");
connect();