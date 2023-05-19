const handleUserInput = function(key) {
  // code written from office hours visit
  switch (key) {
  case "w":
    process.stdin.write("Move: up");
    break;
  case "a":
    process.stdin.write("Move: left");
    break;
  case "s":
    process.stdin.write("Move: down");
    break;
  case "d":
    process.stdin.write("Move: right");
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

const setupInput = function() {
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