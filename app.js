const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }

    },
    handler: function(argv) {
        //    console.log('BODY' + argv.body)

        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removes a function',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',

        },
    },
    handler: function(argv) {
        console.log('removing a note')
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'lists notes',
    handler: function() {
        // console.log('listing notes')
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'reads functions ',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('reading a note')
        notes.readNotes(argv.title)
    }
})

//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()