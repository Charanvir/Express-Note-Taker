// this page will set up the get and port requests to send back API data
const router = require('express').Router();
const { findById, createNewNote, validateNote } = require("../../lib/note")
const { note } = require("../../data/db.json")

router.get("/notes", (req, res) => {
    let noteVar = note;
    res.json(noteVar)
});

router.get("/notes/:id", (req, res) => {
    let noteVar = findById(req.params.id, note)
    if (noteVar) {
        res.json(noteVar);
    } else {
        res.send(404)
    }
});

router.post("/notes", (req, res) => {
    // this will set a new ID increasing in one number every time
    req.body.id = note.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send("This note was not properly formatted before entering!")
    } else {
        let noteVar = createNewNote(req.body, note)
        res.json(noteVar)
    }
})

module.exports = router