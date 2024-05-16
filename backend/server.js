const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "Data from backend API" });
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
