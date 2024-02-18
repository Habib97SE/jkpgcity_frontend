import React from "react";
import {GoDotFill} from "react-icons/go";
import {Link} from "react-router-dom";
import "./Item.css";

function Item({id, title, content, image, author, time, category, readTime}) {
    const MetaElement = (elementOne, elementTwo) => {
        if (!elementOne || !elementTwo) {
            return <div style={{color: " #a6a6a6"}} className={"my-2"}>{elementOne} {elementTwo}</div>
        } else {
            return <div style={{color: " #a6a6a6"}} className={"my-2"}>{elementOne} <GoDotFill/> {elementTwo}</div>
        }
    }
    return (
        <Link to={`/news/${id}`} className={"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"}
              style={{color: "inherit", textDecoration: "none"}}>
            <div style={{display: "inline-block"}}>
                <div className={""}>
                    <img
                         className={"img-fluid card-img"} src={image}
                         style={{borderRadius: "11px", height: "250px", width: "100%"}}
                         alt={title}/>
                    {MetaElement(author, readTime)}
                    <h5 className={"text-capitalize"}>{title}</h5>
                    <p>{content}</p>
                    <footer>
                        {MetaElement(category, time)}
                    </footer>
                </div>
            </div>
        </Link>
    );
}

export default Item;