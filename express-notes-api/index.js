const dataJSON = require('./data.json');
const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const prop in dataJSON.notes) {
    notes.push(dataJSON.notes[prop]);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataJSON.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(dataJSON.notes[id]);
  }
});

app.listen(3000, () => {
  // console.log('Listening on port 3000');
});

app.use(express.json());

app.post('/api/notes', (req, res) => {

});
