import React, {Component} from 'react'
import './NoteForm.css'


class NoteForm extends Component{
    render(props){
        return(
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note" 
                value= {this.props.currentNote.title} />
            </p>
            
            <textarea name="body" 
              placeholder="Type your note here"
              value= {this.props.currentNote.body}>
            </textarea>
          </form>
          
        </div>
        )
    }
}

export default NoteForm