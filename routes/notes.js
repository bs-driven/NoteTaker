const router = require('express').Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

  

router.get('/', (req, res) => {
    console.info(`${req.method} request received for note`);
  
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });
  // router.get('/:id', (req,res) =>{
  //   console.log(`get request for id = ${req.params.id}`);

  // });

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
        id:uuid(),

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
// A delete based on the id of a note
  router.delete('/:id', (req, res) => {

    readAndDelete(req.params.id, './db/notes.json')
    console.log('got a delete request')
    res.send('Got a DELETE request')
  })

module.exports = router