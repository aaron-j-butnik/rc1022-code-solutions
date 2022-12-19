const express = require('express');
const path = require('path');

const app = express();

const testPath = path.join(__dirname, 'public');

const staticMiddleware = express.static(testPath);
app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('listening on port 3000.');
});
