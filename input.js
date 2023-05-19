const handleUserInput = function(key) {
  // code written from office hours visit
  switch (key) {
  case "w":
    socket.write("Move: up");
    break;
  case "a":
    socket.write("Move: left");
    break;
  case "s":
    socket.write("Move: down");
    break;
  case "d":
    socket.write("Move: right");
    break;
  case "\u0003":
    case "q":
    process.exit();
    break;
  default:
    console.log("unrecognized key");
    break;
  }

};

let socket;

const setupInput = (connection) => {
  socket = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
}