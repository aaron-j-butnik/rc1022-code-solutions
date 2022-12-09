
const express = require('express');
const app = express();

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = req.body.score;
  if (!newName || !newCourse || !newScore || !Number.isInteger(newScore) || newScore < 0 || newScore > 100) {
    res.status(400).json({ Error: 'A valid Name, Course, and Score are required. Score must only be an integer between 0 - 100.' });
  } else {
    const sqlText = `
      insert into grades (name, course, score)
      values ($1, $2, $3) returning *
     `;
    const sqlValues = [newName, newCourse, newScore];
    db.query(sqlText, sqlValues)
      .then(result => {
        const grade = result.rows;
        const lastEntry = grade[result.rows.length - 1];
        res.status(201).json(lastEntry);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = req.body.score;
  if (!newName || !newCourse || !newScore || newScore < 0 || newScore > 100) {
    res.status(400).json({ Error: 'A valid Name, Course, and Score are required. Score must only be an integer between 0 - 100.' });
  } else {
    const sqlText = `
        update "grades"
           set "name"    = $1,
               "course"  = $2,
               "score"   = $3
         where "gradeId" = $4
         returning *
        `;
    const sqlValues = [newName, newCourse, newScore, gradeId];
    db.query(sqlText, sqlValues)
      .then(result => {
        const updatedGrade = result.rows[0];
        res.status(200).json(updatedGrade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      });
  }
});

// app.listen(3000, () => {
//   // eslint-disable.next-line no-console
//   console.log('Listening on port 3000');
// });
