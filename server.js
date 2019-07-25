const express = require("express");
const cors = require("cors");
const app = express();
const routes = express.Router();
const path = require("path");

app.use(cors());
app.use("/", express.static(__dirname + "/public"));

const route = routes.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use(route);

app.listen(process.env.PORT || 7777, () => {
  console.log("listening");
});
