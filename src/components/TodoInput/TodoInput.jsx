import React from 'react';
import './TodoInput.css';

const TodoInput = ({value, onChange}) => {
    return (
        <>
            <input
                className="task__input"
                onChange={onChange}
                value={value}
            />
        </>
    )
}

export default TodoInput;