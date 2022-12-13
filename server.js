const express = require('express');
const path = require('path');
// const api = requre

const app = express();
const PORT = 3007;
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3007/">localhost:3007/api</a>'
  );
});

// app.get('/api', (req, res) => res.json());

app.listen(3007, () => console.log('Express Server on port 3007!'));