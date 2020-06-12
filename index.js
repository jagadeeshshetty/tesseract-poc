const express = require("express");
const app = express();

let PORT = process.env.PORT || 3000;

app.get("/alive", (req, res) => {
  res.send(`I'm Alive.`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
