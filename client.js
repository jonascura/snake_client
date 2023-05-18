const net = require("net");

// establishes connection with game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interperate the data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Server kicked you out due to inactivity.")
  });

  return conn;
  
};

console.log("Connecting ...");

connect();

module.exports = {
  connect
}