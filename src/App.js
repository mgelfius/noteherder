import React, { Component } from 'react'
import base from './base.js'
import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes:  {},
      currentNote: this.blankNote(),
      uid: null,
    }
  }

  componentDidMount = () =>{
    base.syncState(
      'notes', 
      {
        context: this,
        state: 'notes',
      }
    )
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) =>{
    const notes = {...this.state.notes}
    if(!note.id){
      note.id = Date.now()
    }
    notes[note.id] = note
    
    this.setState({ notes })
    this.setCurrentNote(note)
  }

  removeCurrentNote = (note) =>{
    const notes = {...this.state.notes}
    notes[this.state.currentNote.id] = null
    this.setState({ notes })
    this.resetCurrentNote()
  }

  signedIn = () =>{
    return this.state.uid
  }

  handleAuth = () =>{
    this.setState({uid : 'mgelfius'})
  }

  signOut = () =>{
    this.setState({uid: null})
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
      signOut: this.signOut
    }

    return (
      <div className="App">
        {this.signedIn() ?  
        <Main notes={this.state.notes} currentNote={this.state.currentNote} 
        {...actions} /> 
        : <SignIn handleAuth={this.handleAuth}/>
        }
       
      </div>
    )
  }
}

export default App