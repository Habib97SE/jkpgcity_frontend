import React from "react";
import "./Square.css";


function Square(props) {
    return (
        <div className={"square"} style={{
            width: props.size,
            height: props.size,
            backgroundColor: props.color,
            border: "1px solid #000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px",
            fontSize: props.size ? props.size * 0.5 : "50px"
        }}>
            {props.children}
        </div>
    );
}

export default Square;