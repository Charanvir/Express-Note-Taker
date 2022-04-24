const fs = require("fs")
const { createNewNote, findById, validateNote } = require("../lib/note")
const { note } = require("../data/db.json")

// this will prevent the fs function from actually running, therefore the database will not be affected, regardless of how many tests we run
jest.mock("fs")

test("text whether a new note object is created", () => {
    const newNote = createNewNote({ title: "New Title", text: "New Text" }, note)
    // we are expecting that the function will work and the object returned has the following values
    expect(newNote.title).toBe("New Title")
    expect(newNote.text).toBe("New Text")
})

test("test whether function can find the object given the ID", () => {
    const noteArray = [
        {
            id: "123",
            title: "Note 123",
            text: "Text for Note 123"
        },
        {
            id: "321",
            title: "Note 321",
            text: "Text fo Note 321"
        }
    ]
    // this will run the array above in the function 
    const findNote = findById("123", noteArray)
    // the expected outsome is that the correct object within the array is found
    expect(findNote.title).toBe("Note 123")
})

test("test whether the function will return false if a string is left empty or not entered as a string (e.g. number for example", () => {
    // these two are incorrectly inputted and should return false
    const emptyField = [
        {
            title: "",
            text: "Text"
        }
    ]
    const numberInField = [
        {
            title: 2,
            text: "Text"
        }
    ]
    // this array is correctly inputted and should return true
    const correct = [
        {
            title: "Title",
            text: "Text"
        }
    ]

    const empty = validateNote(emptyField)
    const numberField = validateNote(numberInField)
    const correctInput = validateNote(correct)

    expect(empty).toBeFalsy()
    expect(numberField).toBeFalsy()
    expect(correct).toBeTruthy()
})