import React, { Component } from 'react';
import {MdClose} from "react-icons/md";
import {MdDone} from "react-icons/md";
import {MdRedo} from "react-icons/md";
import './TodoItem.css';

class TodoItem extends Component {
    state = {
        inputText: ''
    }

    handleInputChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        const {text, removeTask, id, completeTask, isCompleted, isChanged, editTask, escapeEditTask} = this.props;
        const {inputText} = this.state;
        return (
            <li>
                {!isChanged && 
                    <li>
                        <div className="li__content">
                            <label className="checkbox__label">
                                <input className="checkbox" checked={isCompleted?'checked':''} onClick={()=> completeTask(id)} type='checkbox'/>
                                <span className="checkbox__fake"></span>
                            </label>            
                            <span className="task" onDoubleClick={() => editTask(id, text)} style ={isCompleted?{textDecoration: 'line-through'}: {textDecoration: 'none'} }>{text}</span>
                            <MdClose className="delete-btn" onClick={()=>removeTask(id)}/>
                        </div>                       
                    </li>}
                {isChanged &&
                    <li className="change_li">
                        <form onSubmit={() => editTask(id, inputText)}>
                        <input className="change__input" onChange={this.handleInputChange}/>
                        <MdDone className="confirm-edit-btn" onClick={() => editTask(id, inputText)}/>
                        <MdRedo className="escape-edit-btn" onClick={() => escapeEditTask(id)}/>
                        </form>        
                    </li>}
            </li>
        )
    }
}

export default TodoItem;