const net = require("net");

// establishes connection with game server
const connect = function() {
  const socket = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interperate the data as text
  socket.setEncoding("utf8");

  socket.on("data", (data) => {
    console.log("Server says:", data);
  });

  socket.on("connect", () => {
    socket.write(`Name: SNK`);

    console.log("Connected to server!");

    setInterval(() => {
      socket.write("Say: No biggie");
    }, 24598);

    setInterval(() => {
      socket.write("Say: This is easy");
    }, 65678);

  });

  /*
  conn.on("connect", () => {
    conn.write(`Move: up`);
  });
  */
 
  return socket;
  
};

module.exports = {
  connect
};