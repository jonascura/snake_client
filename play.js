const { connect } = require("./client.js");
// const { stdin } = require("process");
// setup interface to handle user input from stdin
let socket = connect();

const handleUserInput = function(key) {
  // your code here

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

  // input.on("data", (key) => {
  //   console.log("key pressed:", key);
  //   conn.write("Move: up")
  //   if (key === '\u0003') {
  //     process.exit();
  //   }
  // })
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  // handleUserInput(stdin, conn)
  return stdin;
};


setupInput();