const router = require('express').Router()
const { createNote } = require("../../lib/note")
const { data } = require("../../data/db.json")


router.get("/notes", (req, res) => {
    let notes = data
    res.json(notes)
})

router.post('/notes', (req, res) => {
    const note = createNote(req.body, data)
    res.json(note)
})


module.exports = router;