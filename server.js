const express = require('express');
const path = require('path');
const noteData = require('./db/notes.json')

const app = express();
const PORT = process.env.port || 3007;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/api/notes', (req, res) => res.json(noteData));

app.get('/api/notes', (req, res) => {
  // Inform the client
  res.json(`${req.method} request received to get notes`);
  // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);
  return res.json(notes);
});
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.post('/api/notes', (req, res) => {
  res.json(`${req.method} request recevied`);
  // console.info(req.rawHeaders)
  console.info(`${req.method} request received`)

});



app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);