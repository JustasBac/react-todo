import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus() //focus ant ko paspausta. Siuo atveju input
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.submitinam({
            id: Math.floor(Math.random() * 10000), //sukuriam random id
            text: input
        });
        setInput('') //kai paspaudi mygtuka tada inputo value padaro ' '
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a task" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
            <button className="todo-button">Add a task</button>
        </form>
    )
}

export default TodoForm
