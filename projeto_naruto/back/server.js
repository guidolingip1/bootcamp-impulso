const cors = require("cors");
const express = require("express");
const app = express();

const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ mensagem: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
