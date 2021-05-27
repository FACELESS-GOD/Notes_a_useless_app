
const fs = require('fs');
const chalk = require('chalk');

const getNotes  = function (){
                               return 'your Notes...'
                             }

const addNotes = function (title , body) {
    const note = loadNotes();

    const duplicateNotes  = note.filter(function (note2) {
        return note2.title === title ; 
    });

    if(duplicateNotes.length === 0)
    {
        console.log(chalk.green.inverse('Note Added'));
        note.push({
            title:title,
            body:body
        });
        saveNotes(note);
    }
    else
    {
        console.log(chalk.red.inverse('Note title is already taken '));
    }
    
}

const saveNotes = function (note){
    const noteJSON = JSON.stringify(note);
    fs.writeFileSync('notes.json',noteJSON);
}

const loadNotes = function (){
    try
    {   
    const dataBuffer  = fs.readFileSync('notes.json'); 
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return [] 
    }
}

const removeNotes = function (title) {
                                      const notes = loadNotes();
                                      const noteToRemove = notes.filter(function (note3) {
                                          return note3.title !== title ;
                                       });
                                       if(notes.length === noteToRemove.length)
                                       {
                                        console.log(chalk.red.inverse('Note never existed in the first place . '));
                                       }
                                       else
                                       {
                                        saveNotes(noteToRemove);
                                        console.log(chalk.green.inverse('Note Removed'));
                                       }
                                       
                                }

const listNotes = function () {}

const readNotes = function (title) {
                                        console.log("Reading the note : ",title);
                                   }

module.exports = {
    geyNotes : getNotes , 
    addNotes : addNotes ,
    removeNotes : removeNotes ,
    listNotes : listNotes , 
    readNotes : readNotes
} 