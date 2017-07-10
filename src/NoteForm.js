import React, {Component} from 'react'
import RichTextEditor from 'react-rte'
import './NoteForm.css'


class NoteForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      editorValue: RichTextEditor.createEmptyValue(),
    }
  }

    handleChanges = (ev) =>{
      const note = {...this.props.currentNote}
      note[ev.target.name] = ev.target.value
      this.props.saveNote(note)
    }

    handleEditorChanges = (editorValue) =>{
      this.setState({ editorValue })
      const note = {...this.props.currentNote}
      note.body = editorValue.toString('html')
      this.props.saveNote(note)
    }

    componentWillReceiveProps = (nextProps) =>{
      
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
            
            <RichTextEditor 
              name="body" 
              placeholder="Type your note here"
              value= {this.state.editorValue}
              onChange = {this.handleEditorChanges}>
            </RichTextEditor>
          </form>
          
        </div>
        )
    }
}

export default NoteForm