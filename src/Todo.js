import React, { useState } from 'react';
import './Todo.css';
import EditTodoForm from './EditTodoForm';

const Todo = ({ task, id, removeTodo, editTodo }) => {
    const todo = {
        task,
        id
    };
    const [hidden, setHidden] = useState(true);
    const resetHidden = () => {
        setHidden(true);
    }
    const rendered = hidden ? { display: 'none' } : {};
    return (
        <div className='Todo'>
            <span className='Todo-task'>{task}</span>
            <button onClick={() => setHidden(false)}>Edit</button>
            <button onClick={() => removeTodo(id)}>X</button>
            <EditTodoForm editTodo={editTodo} todo={todo} resetHidden={resetHidden} rendered={rendered} />
        </div>
    )
}

export default Todo;