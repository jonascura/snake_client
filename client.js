const net = require("net");
const { IP, PORT, name, message1, message2 } = require("./constants");

// establishes connection with game server
const connect = function() {
  const socket = net.createConnection({
    host: IP,
    port: PORT
  });

  // interperate the data as text
  socket.setEncoding("utf8");

  socket.on("data", (data) => {
    console.log("Server says:", data);
  });

// displays commands upon connection
  socket.on("connect", () => {
    socket.write(`Name: ${name}`);
    console.log("Connected to server!");

    setInterval(() => {
      socket.write(`Say: ${message1}`);
    }, 24598);

    setInterval(() => {
      socket.write(`Say: ${message2}`);
    }, 65678);

  });

  return socket;
  
};

module.exports = {
  connect
};