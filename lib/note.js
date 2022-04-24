const fs = require("fs")
const path = require("path")

function createNewNote(body, dataArray) {
    const note = body
    dataArray.push(note)

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ note: dataArray }, null, 2)
    )
    return note
}

function findById(id, dataArray) {
    const note = dataArray.filter(data => data.id === id)[0]
    return note
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true
}




module.exports = {
    createNewNote,
    findById,
    validateNote
}