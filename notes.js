const fs = require('fs')
const chalk = require('chalk')
const getNotes = function() {
    return 'Your notes ....'
}
const removeNotes = function(title) {
    const notes = loadNotes()
    console.log(title)
    const findNotes = notes.filter((note) => { return note.title !== title })
    if (findNotes.length === notes.Length) {
        console.log(chalk.bgRed("file not found"))
    } else {
        console.log(chalk.bgGreen("remove successful"))
    }
    saveNotes(findNotes)
}
const addNotes = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => { return note.title === title })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }


    notes.push({
        title: title,
        body: body

    })
    saveNotes(notes)

}
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const datajson = dataBuffer.toString()
        return JSON.parse(datajson)
    } catch (e) {
        return []
    }

}


const listNotes = () => {
        console.log(chalk.bgBlue('your notes'))
        const notes = loadNotes()
            //const dep = notes.filter((note))
        notes.forEach((note) => {
            console.log(note.title)
        })
    }
    //module.exports = getNotes
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (!note) {
        console.log(chalk.red("note not found"))
    } else {
        console.log(note.body)
    }



}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}