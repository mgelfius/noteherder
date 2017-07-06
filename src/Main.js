import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteList notes={props.notes} titleBody={props.titleBody}/>
            <NoteForm activeNote={props.notes} titleBody={props.titleBody}/>
        </div>
    )
}

export default Main