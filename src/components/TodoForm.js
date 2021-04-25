import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    var objToday = new Date(),
        domEnder = function () {
            var a = objToday;
            if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
            a = parseInt((a + "").charAt(1));
            return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th"
        }(),
        dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours(),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();

    var today = curHour + ":" + curMinute + " " + curMonth + " " + dayOfMonth + ", " + curYear;

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

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //sukuriam random id
            text: input,
            date: today
        });
        setInput(''); //kai paspaudi mygtuka tada inputo value padaro ' '
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a task" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
            <button className="todo-button">Add a task</button>
        </form>
    )
}

export default TodoForm
