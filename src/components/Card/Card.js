import React from "react";
import "./Card.css";

function Card({title, image, text, additionalStyle, imageInLeft = true}) {
    return (
        <div className="card my-4">
            {imageInLeft ? <img src={image} alt={title} className="card-img"/> : null}
            <div className="card-body d-flex justify-content-center align-items-center flex-column" style={additionalStyle}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            {!imageInLeft ? <img src={image} alt={title} className="card-img"/> : null}
        </div>
    );
}

export default Card;