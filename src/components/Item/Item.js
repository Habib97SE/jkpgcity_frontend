import React from "react";
import {GoDotFill} from "react-icons/go";

function Item({title, content, image, author, time, category, readTime}) {
    const topMetaElement = (elementOne, elementTwo) => {
        if (!elementOne || !elementTwo) {
            return <small style={{color: " #a6a6a6"}}>{elementOne} {elementTwo}</small>
        } else {
            return <small style={{color: " #a6a6a6"}}>{elementOne} <GoDotFill/> {elementTwo}</small>
        }
    }
    return (

        <div className={"col-xs-12 col-sm-12 col-md-5 col-lg-3 mx-auto"}>
            <article className={"article"}>
                <img src={image} alt={title}/>
                {topMetaElement(author, time)}
                <h3 className={"text-capitalize"}>{title}</h3>
                <p>
                    {content}
                </p>
                <footer>
                    {topMetaElement(category, readTime)}
                </footer>
            </article>
        </div>

    );
}

export default Item;