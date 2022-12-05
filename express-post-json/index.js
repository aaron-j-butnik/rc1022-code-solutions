const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.listen(3000, () => {
  //  eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const property in grades) {
    gradesArr.push(grades[property]);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  // const newGrade = req.body;
  // const id = nextId++;
  // newGrade.id = id;
  // grades[id] = newGrade;
  req.body.id = nextId;
  nextId++;
  grades[req.body.id] = req.body;
  res.status(201).json(req.body);
});
