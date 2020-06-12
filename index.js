const express = require("express");
const app = express();

app.get("/alive", (req, res) => {
  res.send(`I'm Alive.`);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});
