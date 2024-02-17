import React, {useEffect, useState} from "react";
import Pagination from "../components/Pagination/Pagination";
import Item from "../components/Item/Item";
import Filter from "../components/Filter/Filter";
import Sort from "../components/Sort/Sort";

function News() {
    const [news, setNews] = useState([]);
    const [filterBy, setFilterBy] = useState("date");
    const [sortBy, setSortBy] = useState("newest");
    useEffect(() => {
        document.title = "News";
        const fetchNews = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setNews(data);
        }

        fetchNews();


    }, [filterBy, sortBy]);

    const handleFilterChange = (e) => {
        setFilterBy(e.target.value);
    }

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }

    const randomCategory = () => {
        const categories = ["Technology", "Business", "Health", "Entertainment", "Science", "Sports", "Politics"];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    return (
        <div className={"col-9 mx-auto"}>
            <div className={"row d-flex flex-row justify-content-between"}>
                <h1>Latest News around Jönköping</h1>
                <Filter handleChange={handleFilterChange}/>
                <Sort handleChange={handleSortChange}/>
            </div>
            <hr/>
            <div className={"row d-flex flex-wrap"}>
                {news.map((article, index) => {
                    return <Item key={index} title={article.title} content={article.body}
                                 image={"https://picsum.photos/200/300"} author={"John Doe"} time={"10 minutes ago"}
                                 category={<span style={{color: "red"}}>{randomCategory()}</span>}
                                 readTime={"5 min read"}/>
                })}
            </div>
            <hr/>
            <div className={"row pagination"}>
                <Pagination/>
            </div>
        </div>
    );
}

export default News;