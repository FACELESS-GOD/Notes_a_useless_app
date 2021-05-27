const chalk = require('chalk');
const note = require('./Notes.js');
const yargs  = require('yargs');

yargs.version('1.0.0');

//adding a note

yargs.command(
    {
         command : 'add' ,
         describe : 'Add a new note ' , 
         builder: {
                     title:{
                                 describe : 'Note title',
                                 demandOption:true,
                                 type:'string'
                            },
                     body : {
                                 describe : 'body of the title ',
                                 demandOption:true,
                                 type:'string'
                             }
                 },
         handler : function (argv)
                             {
                                note.addNotes(argv.title , argv.body)
                             }
    }
)

//removing a note

yargs.command(
    {
        command:'remove',
        describe:'Remove the  note ',
        builder:{
                    title:{
                            describe:'Note to be removed',
                            demandOption:true,
                            type:'string'  
                          }
                },
        handler: function (argv)
                             {
                                note.removeNotes(argv.title);
                             }    
    }
)

//Listing a note

yargs.command(
    {
        command:'list',
        describe:'Listing  all the notes ',
        handler: function () 
                            {
                                console.log("List all the notes ! ");
                            } 
    }
)

//reading a note 

yargs.command(
    {
        command:'read',
        describe:'Reading all  the  note ',
        builder : {
                    title : {
                                 describe:'Note to be removed',
                                 demandOption:true,
                                 type:'string'
                            }
                  },
        handler: function (argv) 
                            {
                                note.readNotes(argv.title);
                            } 
    }
)

yargs.parse();