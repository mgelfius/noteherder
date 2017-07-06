import React, {Component} from 'react'
import './NoteForm.css'


class NoteForm extends Component{
    handleChanges = (ev) =>{
      const note = {...this.props.currentNote}
      note[ev.target.name] = ev.target.value
      this.props.saveNote(note)
    }

    render(props){
        const { currentNote } = this.props

        return(
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"
                onClick={this.props.removeCurrentNote}
              ></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note" 
                value= {this.props.currentNote.title} 
                onChange = {this.handleChanges}/>
            </p>
            
            <textarea 
              name="body" 
              placeholder="Type your note here"
              value= {this.props.currentNote.body}
              onChange = {this.handleChanges}>
            </textarea>
          </form>
          
        </div>
        )
    }
}

export default NoteForm