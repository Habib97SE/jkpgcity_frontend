import React, { useEffect, useState } from "react";
import TodoController from "../../controller/TodoController";
import "../Square/Square.css";
import TodoModal from "./TodoModal";
import "./styles.css"


const todaysDate = new Date();


function generateBackgroundColor(year, month, day) {
    // if the date is today, return a light blue color
    if (year === todaysDate.getFullYear() && month === todaysDate.getMonth() && day === todaysDate.getDate()) {
        return "lightblue";
    }

    // if the date is passed, return a light grey color
    if (new Date(year, month, day) < todaysDate) {
        return "lightgrey";
    }
    // if the date is in the future, return a light green color
    return "lightgreen";
}

/**
 * It creates a square for each day in the calendar. It fetches the todos for that day and displays them in the square. 
 * If there are no todos, the square is colored according to the color prop.
 * @param {*} param0 
 * @returns 
 */
function Square({ size, color, year, month, day, children }) {
    const [showModal, setShowModal] = useState(false);
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await TodoController.getTodos({ dueDate: `${year}-${month}-${day}` });
            setTodos(todos);
        };

        fetchTodos();
    }, [year, month, day]);

    const handleClickShowModal = () => {
        // Set showModal only if the date is not in the past
        if (new Date(year, month, day) >= todaysDate) {
            setShowModal(true);
        }
    }

    return (
        <div
            className="square d-flex justify-content-center align-content-center p-4"
            style={{
                width: size,
                height: size,
                backgroundColor: generateBackgroundColor(year, month, day),
                borderRadius: "10px",
            }}
            onClick={() => handleClickShowModal()} // Set showModal to true on click
        >
            {/* all content of the square is shown here */}
            {children}
            <hr />
            {/* Display the todos in the square */}
            {todos.length > 0 ? (
                <div>
                    <h4>Todos</h4>
                    <ul>
                        {todos.map((t, index) => (
                            <li key={index}>{t.title}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No todos for today</p>
            )}

            {/* Display the modal */}

            <TodoModal
                show={showModal}
                setShow={setShowModal}
                year={year}
                month={month}
                day={day}
            />
        </div>
    );
}

export default Square;