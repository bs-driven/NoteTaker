const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

  

router.get('/', (req, res) => {
    console.info(`${req.method} request received for note`);
  
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });

  // POST Route for submitting note
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit note`);
  
    // Destructuring assignment for the items in req.body
    const { title,text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        note_id:uuid(),

      };
  
      readAndAppend(newNote, './db/notes.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting note');
    }
  });

  router.delete('/', (req, res) => {
    res.send('Got a DELETE request')
  })

module.exports = router