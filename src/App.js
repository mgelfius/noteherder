import React, { Component } from 'react';
import './App.css';

import Main from './Main'

class App extends Component {
  constructor(){
    super()

    this.state = {
      notes:{
        'note-4':{
          id: "hello",
          title: 'lorem ipsum',
          body: 'ajhbsdfh fr fuifra fifvbdferufh',
        },
        'note-5':{
          id: 'test 2',
          title: 'kyle xy',
          body: 'only 90s kids remember'
        },
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes}/>
      </div>

      )

}
}

export default App
