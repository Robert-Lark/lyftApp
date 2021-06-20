const express = require("express");
const server = express();
var cors = require("cors");

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Welcome to the Lyft Application App");
});

server.post("/test", (req, res) => {
  const input = req.body.string_to_cut;
  let mutatedInput = "";
  for (x = 0; x < input.length; x++) {
    if (input[x + 1] == undefined) {
        break
      }
      if ((x -1) % 3 == 0) {
        mutatedInput += input[x + 1];
      }
  }
  res.send({
    return_string: mutatedInput,
  });
});

module.exports = server;
