const fs = require("fs")
const path = require("path")


// this function creates a new note. It takes the body of the body of the note JSON created and the note database and pushes the new note into the database array. 
function createNewNote(body, dataArray) {
    const note = body
    dataArray.push(note)

    // this allows the modified database to be returned
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ note: dataArray }, null, 2)
    )
    return note
}

// this function will be able to find a specific note based on its ID
function findById(id, dataArray) {
    const note = dataArray.filter(data => data.id === id)[0]
    return note
}

// this function will assure that the note being inputted is formatted correctly
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true
}



// this will make the functions in this file accessible to other files
module.exports = {
    createNewNote,
    findById,
    validateNote
}