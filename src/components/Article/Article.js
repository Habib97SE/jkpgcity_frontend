import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {IoMdHeart} from "react-icons/io";
import {CiHeart} from "react-icons/ci";
import Helper from "../../utils/Helper";
import {GoDotFill} from "react-icons/go";

function Article() {
    const [news, setNews] = useState({});
    const [liked, setLiked] = useState(false);
    const [countLike, setCountLike] = useState(0);
    let {id} = useParams();

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setNews(data);
        }

        fetchNews();
    }, [id]); // Include 'id' in the dependency array

    const handleClick = () => {
        setLiked(!liked);
        setCountLike(prevCount => liked ? prevCount - 1 : prevCount + 1);
        if (liked) {
            console.log(liked);
            console.log("You liked this article, update the database");
        } else {
            console.log("You unliked this article, update the database");
        }
        console.log("Update countLikes in the database");

    }

    // Guard against accessing properties of 'news' before it is defined
    if (!news || Object.keys(news).length === 0) {
        return <div
            style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}
        >Loading...</div>;
    }

    return (
        <div className={"row col-sm-12 col-md-8 col-lg-6 mx-auto"} style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            marginTop: "20px"
        }}>
            <img style={{borderRadius: "8px"}} src={`https://picsum.photos/seed/picsum/500/700`}
                 className={"img-fluid w-100"} alt={news.title}/>

            <h1 className={"text-capitalize"}>{news.title}</h1>
            <span style={{color: " #a6a6a6"}}>
                <small className={"px-3"}>Author: John Doe</small>
                <GoDotFill/>
                <small className={"px-3"}>{Helper.calculateReadTime(news.body)} min reading</small>

            </span>
            <div className={"text-black"}>{news.body}</div>
            <hr style={{marginTop: "2%"}}/>
            <footer className={"col-xs-12 col-sm-12 col-md-8 col-lg-6"}>
                <div className={"d-flex flex-row justify-content-between"}>
                    <div>
                        <button className={"btn"} onClick={handleClick}>
                            {
                                liked ? <IoMdHeart style={{color: "red"}} /> : <CiHeart/>
                            }
                            <span className={"px-1"}>{countLike} Likes</span>
                        </button>
                    </div>
                    <div style={{color: " #a6a6a6"}}>
                        <span
                            style={{color: "red"}} className={"px-3"}>Technology</span>
                        <GoDotFill/>
                        <small className={"px-3"}>Published: 10 minutes ago</small>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Article;
