import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);


    const addTodo = (todo) => {
        setTodos(todos => [...todos, { ...todo, id: uuid() }]);
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (todo) => {
        const found = todos.find(t => t.id === todo.id);
        found.task = todo.task;
        setTodos(todos => [...todos]);
    }

    return (
        <div className='TodoList'>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(todo =>

                <Todo task={todo.task} key={todo.id} id={todo.id} removeTodo={removeTodo}
                    editTodo={editTodo} />

            )}
        </div>
    )
};

export default TodoList;