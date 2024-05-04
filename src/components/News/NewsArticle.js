import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Helper from "../../utils/Helper";
import { GoDotFill } from "react-icons/go";
import NewsController from "../../controller/NewsController";
import CustomDate from "../../utils/CustomDate";

function NewsArticle() {
    const [news, setNews] = useState({});
    const [liked, setLiked] = useState(false);
    const [countLike, setCountLike] = useState(0);
    let { id } = useParams();
    const [category, setCategory] = useState("");
    const [customMadeDateText, setCustomMadeDateText] = useState("");



    useEffect(() => {
        console.log("useEffect in NewsArticle")
        const fetchNews = async () => {
            const response = await NewsController.find(id);
            if (response.message === "Success") {
                // data is the news object
                const data = response.data;
                setNews(data);

                // Get the category name
                const categoryName = await NewsController.getCategory(data.newsCategoryId);
                setCategory(categoryName);
                setCustomMadeDateText(CustomDate.generateCustomeMadeDateText(data.createdAt));
            } else {
                console.log(response.error);
            }
        }

        fetchNews();
    }, [id]);

    const handleClick = () => {
        setLiked(!liked);
        setCountLike(prevCount => liked ? prevCount - 1 : prevCount + 1);
    }

    // Guard against accessing properties of 'news' before it is defined
    if (!news || Object.keys(news).length === 0) {
        return <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
        >Loading...</div>;
    }

    return (
        <div className={"row col-sm-12 col-md-8 col-lg-8 mx-auto"} style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            marginTop: "20px"
        }}>
            <img style={{ borderRadius: "8px", width: "100%", height: "500px" }} src={`https://picsum.photos/seed/picsum/500/700`}
                className={"img-fluid w-100"} alt={news.title} />

            <h1 className={"text-capitalize"}>{news.title}</h1>
            <span style={{ color: " #a6a6a6", fontSize: "1.2rem" }}>
                <small className={"px-3"}>By <span className="text-danger">John Doe</span></small>
                <GoDotFill />
                <small className={"px-3"}>{Helper.calculateReadTime(news.content)} min reading</small>
            </span>
            <div
                className="my-3"
                dangerouslySetInnerHTML={{ __html: news.content }} />
            <footer>
                <span>
                    <small className={"text-danger mx-2"}>{category}</small>
                    <GoDotFill style={{ color: "#a6a6a6" }} />
                    <small className={"mx-2"} style={{ color: "#a6a6a6" }}>{customMadeDateText}</small>
                </span>
                <span className={"float-right"}>
                    <small className={"mx-2"}>{countLike}</small>
                    {liked ? <IoMdHeart onClick={handleClick} style={{ color: "red" }} /> : <CiHeart onClick={handleClick} />}
                </span>
            </footer>
        </div>
    );
}

export default NewsArticle;