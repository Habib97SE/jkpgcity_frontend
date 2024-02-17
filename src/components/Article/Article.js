import React, {useEffect, useState} from "react";
import {IoMdHeart} from "react-icons/io";
import {CiHeart} from "react-icons/ci";
import "./Article.css";
import Helper from "../../utils/Helper";


function Article({id}) {
    const [news, setNews] = useState({});
    const [liked, setLiked] = useState(false);
    const [countLike, setCountLike] = useState(0);


    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            console.log(data);
            setNews(data);
        }
        fetchNews();
        document.title = news.title;
    }, [news]);

    const handleClick = () => {
        setLiked(!liked);
        if (liked) {
            setCountLike(countLike - 1);
        } else {
            setCountLike(countLike + 1);
        }
    }
    return (<div className={"row col-sm-12 col-md-8 col-lg-6 mx-auto"} style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        marginTop: "20px"

    }}>
        <img style={{borderRadius: "8px"}} src={`https://picsum.photos/500/700?random=${id}`}
             className={"img-fluid w-100"} alt={news.title}/>
        <small style={{color: " #a6a6a6"}}>Author: John Doe</small>
        <h1 className={"text-capitalize"}>{news.title}</h1>
        <span>
                <small style={{color: " #a6a6a6"}}>Published: 10 minutes ago</small>
            </span>
        <div className={"text-black"}>{news.body}</div>
        <hr style={{
            marginTop: "2%",
        }}/>
        <footer className={"col-xs-12 col-sm-12 col-md-8 col-lg-6"}>
            <div className={"d-flex flex-row justify-content-between"}>
                <div>
                    <button className={"btn"} onClick={handleClick}>
                        {liked ? <IoMdHeart style={{color: "red"}}/> : <CiHeart/>}
                        <span className={"px-1"}>{countLike} Likes</span>
                    </button>
                </div>
                <div>
                    <small style={{color: " #a6a6a6"}}>Category: <span style={{color: "red"}}>Technology</span></small>
                    <small style={{color: " #a6a6a6"}}>{Helper.calculateReadTime(news.body)} minute(s) reading</small>
                </div>
            </div>
        </footer>
    </div>);
}

export default Article;