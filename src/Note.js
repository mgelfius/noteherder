import React from 'react'

const Note = (props) =>{
    const handleClick = (ev) =>{
        if(ev.target.className === 'note-title'){
            ev.target = ev.target.parentNode
        }else if(ev.target.parentNode.className === 'note-body'){
            ev.target = ev.target.parentNode.parentNode
        }else if(ev.target.className === 'noteLi'){
            ev.target = ev.target.children[0]
        }
        
        props.titleBody.title = ev.target.children[0].textContent
        props.titleBody.body = ev.target.children[1].textContent
        
        return props.titleBody

    }

    return(
    <a onClick={handleClick}>
        <li className = 'noteLi'>
            <div className="note">
                <div className="note-title">
                    {props.note.title}
                </div>
                <div className="note-body">
                    <p>
                      {props.note.body}
                    </p>
                </div>
            </div>
        </li>
    </a>
    )
}

export default Note