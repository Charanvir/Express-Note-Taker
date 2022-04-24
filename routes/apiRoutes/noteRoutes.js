// this page will set up the get and port requests to send back API data
const router = require('express').Router();
// this allows this file to use the functions created in the note.js file in the lib folder
const { findById, createNewNote, validateNote, deleteNote } = require("../../lib/note")
const { note } = require("../../data/db.json")

// this returns the client the JSON formatted database
router.get("/notes", (req, res) => {
    let noteVar = note;
    res.json(noteVar)
});

// This returns a specific note in a JSON formatted style
router.get("/notes/:id", (req, res) => {
    let noteVar = findById(req.params.id, note)
    if (noteVar) {
        res.json(noteVar);
    } else {
        res.send(404)
    }
});

// this functions lets the user enter a new note and save it into the database
router.post("/notes", (req, res) => {
    // this will set a new ID increasing in one number every time
    if (note.length === 0) {
        req.body.id = "0"
    } else {
        req.body.id = note.length.toString();
    }
    if (!validateNote(req.body)) {
        res.status(400).send("This note was not properly formatted before entering!")
    } else {
        let noteVar = createNewNote(req.body, note)
        res.json(noteVar)
    }
})

router.delete("/notes/:id", (req, res) => {
    let newArray = deleteNote(req.params.id, note)
    res.json(newArray)
})

module.exports = router