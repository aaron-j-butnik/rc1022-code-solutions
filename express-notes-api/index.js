// const dataJSON = require('./data.json');
// const express = require('express');
// const app = express();

// app.get('/api/notes', (req, res) => {
//   const notes = [];
//   for (const prop in dataJSON.notes) {
//     notes.push(dataJSON.notes[prop]);
//   }
//   res.json(notes);
// });

// app.get('api/notes/:id', (req, res) => {
//   const id = Number(req.param.id);

//   if (id < 0) {
//     res.sendStatus(400).json('"error": "id must be a positive integer"');
//   } else if (id === dataJSON.notes[id]) {
//     res.sendStatus(200).json(dataJSON.notes[id]);
//   } else {
//     res.sendStatus(404).json(`"error: cannot find note with id ${id}"`); 2;
//   }
// });

// app.listen(3000, () => {
//   // console.log('Listening on port 3000');
// });
