const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");
const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));

const port = 9000;
const app = express();

app.use("/api", [
  bodyParser.urlencoded({ extended: true }),
  cors(),
  apiMocker("mock-api"),
]);

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
