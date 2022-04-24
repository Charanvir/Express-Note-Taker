// this page will set up the get and port requests to send back API data
const router = require('express').Router();
const { findById, createNewNote, validateNote } = require("../../lib/note")
const { data } = require("../../data/db.json")

router.get("/notes", (req, res) => {
    let notes = data;
    res.json(notes)
});

router.get("/notes/:id", (req, res) => {
    let notes = findById(req.params.id, animals)
    if (notes) {
        res.json(notes);
    } else {
        res.send(404)
    }
});

router.post("/notes", (req, res) => {
    // this will set a new ID increasing in one number every time
    // req.body.id = data.length.toString();

    if (!validateNote) {
        res.status(400).send("This note was not properly formatted before entering!")
    } else {
        let note = createNewNote(req.body, data)
        res.json(note)
    }
})

module.exports = router