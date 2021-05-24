import React, { useState } from "react";
import './EditTodoForm.css';

const EditTodoForm = ({ editTodo, todo, resetHidden, rendered }) => {
    const INITIAL_STATE = {
        id: todo.id,
        task: todo.task
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo({ ...formData });
        resetHidden();
    }

    return (
        <form onSubmit={handleSubmit} className='EditTodoForm' style={rendered}>
            <label className='EditTodoForm-lable' htmlFor="todo">Edit</label>
            <input
                className='EditTodoForm-input'
                id="todo"
                type="text"
                name="task"
                placeholder="Edit Todo"
                value={formData.task}
                onChange={handleChange}
            />
            <button className='EditTodoForm-button' >Edit Todo</button>
        </form>
    )

}

export default EditTodoForm;