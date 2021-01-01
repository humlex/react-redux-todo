import React from 'react'
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({tasksList, removeTask, completeTask, editTask, escapeEditTask}) => {
    return (
            <div className="wrapper">
                <ul className="todo__list">
                {tasksList.map(({id, text, isCompleted, isChanged})=>(
                    <TodoItem escapeEditTask={escapeEditTask} editTask={editTask} completeTask={completeTask} removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted} isChanged={isChanged}/>
                ))}
                </ul>
            </div>            
    )
}


export default TodoList;