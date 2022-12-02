const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Hello World, its me Mario');
});

app.listen(3000, () => {
});
