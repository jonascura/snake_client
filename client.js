const net = require("net");

// establishes connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interperate the data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    conn.write(`Name: SNK`);
  });

  /*
  conn.on("connect", () => {
    conn.write(`Move: up`);
  });
  */
 
  return conn;
  
};

console.log("Connecting ...");

connect();

module.exports = {
  connect
};