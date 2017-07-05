import React from 'react'
import './NoteList.css'
import Note from './Note'


const NoteList = () =>{
    const notes ={
        'note-4': {
        id: 'note-4',
        title:'My fancy note',
        body: 'Oh so fancy, I do declare!',
    },
        'note-5': {
        id: 'note-5',
        title: 'Yet another fancy note',
        body: 'Also very fancy',
    }
}

const noteIds = Object.keys(notes)  

    return(
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {noteIds.map(noteId => <Note note = {notes[noteId]} />)}
          </ul>
        </div>
    )
}

export default NoteList