import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import {MdDelete, MdEdit} from "react-icons/md";
import Article from "../../components/Article/Article";
import Item from "../../components/Item/Item";
import News from "../News";

const squareImageStyle = {
    width: "250px",
    height: "250px",
    objectFit: "cover",
}

function NewsPage() {

    return (
        <div className={"col-md-12"}
             style={{
                 backgroundColor: "#fff",
                 display: "inline-block",
                 padding: "20px",
                 borderRadius: "10px"
             }}
        >
            <div className="row d-inline-block">
                {/* title in the left and button in the right side */}
                <h1>News</h1>
                <a href={"/admin/news/new"} className={"btn btn-primary"}>Add News</a>
            </div>
            <p>View and manage news</p>
            <div className={"row"}>
                <Item id={1} author={"Habib"} category={"Technology"} content={"Lorem ipsum"} image={"https://placeholder.co/150"} readTime={2} time={"2024-03-21"} title={"Hello world"} />
                <Item id={1} author={"Habib"} category={"Technology"} content={"Lorem ipsum"} image={"https://placeholder.co/150"} readTime={2} time={"2024-03-21"} title={"Hello world"} />
                <Item id={1} author={"Habib"} category={"Technology"} content={"Lorem ipsum"} image={"https://placeholder.co/150"} readTime={2} time={"2024-03-21"} title={"Hello world"} />
                <Item id={1} author={"Habib"} category={"Technology"} content={"Lorem ipsum"} image={"https://placeholder.co/150"} readTime={2} time={"2024-03-21"} title={"Hello world"} />
                <Item id={1} author={"Habib"} category={"Technology"} content={"Lorem ipsum"} image={"https://placeholder.co/150"} readTime={2} time={"2024-03-21"} title={"Hello world"} />
                <Item id={1} author={"Habib"} category={"Technology"} content={"Lorem ipsum"} image={"https://placeholder.co/150"} readTime={2} time={"2024-03-21"} title={"Hello world"} /><Item id={1} author={"Habib"} category={"Technology"} content={"Lorem ipsum"} image={"https://placeholder.co/150"} readTime={2} time={"2024-03-21"} title={"Hello world"} />

            </div>
            <Pagination totalPages={30} currentPageUrl={"/"}/>
        </div>
    );
}

export default NewsPage;