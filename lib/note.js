const fs = require("fs")
const path = require("path")

function createNote(body, dataArray) {
    const note = body
    dataArray.push(note)

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ note: dataArray }, null, 2)
    )

    return note
}




module.exports = {
    createNote,

}