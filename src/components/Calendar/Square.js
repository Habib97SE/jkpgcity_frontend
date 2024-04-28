import React, {useEffect, useState} from "react";
import "../Square/Square.css";
import TodoModal from "./TodoModal";
import "./styles.css"


function Square({ size, color, year, month, day, children }) {
    const [showModal, setShowModal] = useState(false);
    const [todos, setTodos] = useState([]);


    return (
        <div
            className="square d-flex justify-content-center align-content-center p-4"
            style={{
                width: size,
                height: size,
                backgroundColor: todos.length > 0 ? "lightgreen" : color,
                borderRadius: "10px",
            }}
            onClick={() => setShowModal(true)} // Set showModal to true on click
        >
            {children}

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