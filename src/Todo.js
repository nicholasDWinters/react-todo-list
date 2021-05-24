import React from 'react';
import './Todo.css';

const Todo = ({ task, id, removeTodo }) => {

    return (
        <div className='Todo'>
            <span className='Todo-task'>{task}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo;