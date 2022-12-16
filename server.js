const express = require('express');
const path = require('path');
// const noteData = require('./db/notes')
// const fs = require('fs');
// const util = require('util');
const api =require('./routes/index.js');

const PORT = process.env.port || 3007;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', api)

app.use(express.static('public'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// app.get('/api/notes', (req, res) => res.json(noteData));


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);