import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import TodoForm from './TodoForm'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

            <div className="eilute">
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                    <div className="icons">
                        <AiFillDelete onClick={() => removeTodo(todo.id)} className="delete-icon" />
                        <FaRegEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
                    </div>
                </div>
            </div>
            <div>
                {todo.date}
            </div>

        </div>
    ))
}

export default Todo
