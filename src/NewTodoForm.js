import React, { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit} className='NewTodoForm'>
            <label className='NewTodoForm-lable' htmlFor="todo">Todo</label>
            <input
                className='NewTodoForm-input'
                id="todo"
                type="text"
                name="task"
                placeholder="New Todo"
                value={formData.task}
                onChange={handleChange}
            />
            <button className='NewTodoForm-button' >Add Todo</button>
        </form>
    )

}

export default NewTodoForm;