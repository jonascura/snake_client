const { UP_KEY, LEFT_KEY, DOWN_KEY, RIGHT_KEY, TAUNT_KEY, QUIT_KEY, taunt } = require("./constants");

const handleUserInput = function(key) {
  // code written from office hours visit
  switch (key) {
  case UP_KEY:
    socket.write("Move: up");
    break;
  case LEFT_KEY:
    socket.write("Move: left");
    break;
  case DOWN_KEY:
    socket.write("Move: down");
    break;
  case RIGHT_KEY:
    socket.write("Move: right");
    break;
  case TAUNT_KEY:
    socket.write(`Say: ${taunt}`);
    break;
  case "\u0003":
    case QUIT_KEY:
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