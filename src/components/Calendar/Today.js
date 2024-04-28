import React, {useEffect, useState } from "react";


function Today({ year, month, day }) {
    const [todos, setTodos] = useState([]);



    useEffect(() => {
        // TODO: add logic to fetch todos for the current day
    });

    if (todos.length > 0) {
        return (
            <div
                style={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: "lightgrey"
                }}
            >
                <h2>Today's Todos</h2>
                <ul>
                    {todos.map((t, index) => (
                        <li key={index}>{t.title}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Today's Todos</h2>
                <p>No todos for today</p>
            </div>
        );
    }
}

export default Today;