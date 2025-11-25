const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./Public/index.html"));
});
// Use node server.js to start server
const port = 6767
app.listen(port, () =>
  console.log(
    `Server is running on Port ${port}, visit http://localhost:${port}/ or http://127.0.0.1:${port} to access your website`
  )
);
