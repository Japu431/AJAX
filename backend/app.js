const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("METHOD GET");
});

app.post("/", (req, res) => {
  console.log("METHOD POST");
});

app.put("/", (req, res) => {
  console.log("METHOD PUT");
});

app.delete("/", (req, res) => {
  console.log("METHOD DELETE");
});

try {
  createServer().listen(3000);
} catch (err) {
  console.log("Vish deu ruim ", err);
}
