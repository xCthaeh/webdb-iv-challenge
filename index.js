const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const knexConfig = require("./knexfile");
const db = require("./data/method");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("API is running ...");
});

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
