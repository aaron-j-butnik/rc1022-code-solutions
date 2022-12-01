const dataJSON = require('./data.json');
const fs = require('fs');
const userCommand = process.argv[2];

if (userCommand === 'read') {
  const notes = object => {
    for (const property in object.notes) {
      console.log(`${property}: ${object.notes[property]}`);
    }
  };
  notes(dataJSON);
}

if (userCommand === 'create') {
  const noteNumber = dataJSON.nextId;
  dataJSON.notes[noteNumber] = process.argv[3];
  dataJSON.nextId++;
  const createdNote = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', createdNote, err => {
    if (err) throw err;
  });
}

if (userCommand === 'delete') {
  delete dataJSON.notes[process.argv[3]];
  const deletedNote = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', deletedNote, err => {
    if (err) throw err;
  });
}

if (userCommand === 'update') {
  dataJSON.notes[process.argv[3]] = process.argv[4];
  const updatedNote = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', updatedNote, err => {
    if (err) throw err;
  });
}
