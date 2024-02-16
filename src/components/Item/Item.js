import React from "react";

function Item({title, text, image, url}){
    return (

            <div className={"col-sm-12 col-md-6 col-lg-4"} style={{
                border: "1px solid #f2f2f2",
            }}>
                <div className={"card-header"}>

                    <img className={"w-100 img-fluid"} src={image} alt={title}/>
                </div>
                <div className={"card-body"}>
                    <h3>{title}</h3>
                    <p>
                        {text}
                    </p>
                </div>
                <div className="card-footer">
                    <a href={url} className={"btn btn-primary"}>Read more</a>
                </div>
            </div>

    );
}

export default Item;