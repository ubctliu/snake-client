const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting...");
// creates the socket (connection) and stores to variable
const conn = connect();

// sends the connection socket object to input interface
setupInput(conn);