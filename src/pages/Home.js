import React from "react";
import Slider from "../components/Slider/Slider";
import Image2 from "../data/slide2.jpg";
import Card from "../components/Card/Card";
import SalesImage from "../data/sales.jpg";
import RestaurantImage from "../data/restaurants.jpg";
import LibraryImage from "../data/library.jpg";
import JonkopingImageOne from "../data/jonkoping1.webp";
import JonkopingImageTwo from "../data/jonkoping2.jpg";
import JonkopingImageThree from "../data/jonkoping3.jpg";
import Item from "../components/Item/Item";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import Venue from "../components/Venue/Venue";

function Home() {

    const images = [
        {
            title: "Image 2",
            url: Image2
        }
    ]

    return (
        <>
            <Slider slides={[
                {
                    type: "image",
                    url: Image2
                }
            ]}/>
            <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 mx-auto my-4 py-3" style={{
                backgroundColor: "#f2f2f2",
            }}>
                <div className="col-12 p-5">
                    <h1>
                        Welcome to Jönköping City!
                    </h1>
                    <p>
                        This is a simple website for the city of Jönköping. It is built using React and Bootstrap.
                        The website includes a home page, a page with information about the city, and a page with
                        information about the university.
                        The website also includes a simple contact form.
                    </p>
                </div>
            </div>
            <div className={"col-8"} style={{
                margin: "auto"
            }}>
                <h2>
                    What to do in Jönköping:
                </h2>
                <Slider
                    slides={[
                        {
                            type: "html",
                            content: <Card title={"Shopping"} image={SalesImage}
                                           text={"You can find almost all famous brands here including HM, Zara and etc."}
                                           additionalStyle={{
                                               backgroundColor: "#ff4dd2",
                                               color: "#fff"
                                           }}/>
                        },
                        {
                            type: "html",
                            content: <Card title={"Restaurants and coffee!"} image={RestaurantImage}
                                           text={"There is at least one restaurant for each taste."} additionalStyle={{
                                backgroundColor: "#ff3333",
                                color: "#fff"
                            }} imageInLeft={false}/>
                        },
                        {
                            type: "html",
                            content: <Card title={"Read and borrow books!"} image={LibraryImage}
                                           text={"At Jönköping library, you can read books, newspapers or borrow a book for up to 30 days."}
                                           additionalStyle={{
                                               backgroundColor: "#1a8cff",
                                               color: "#fff"
                                           }}/>
                        }
                    ]}
                />
            </div>

            <div className={"col-8 p-5 card-text mx-auto"}>
                <h2>
                    About JKPG City:
                </h2>
                <p>
                    Jönköping is a city in southern Sweden with 93,797 inhabitants (2015). Jönköping is situated at the
                    southern end of Sweden's second largest lake, Vättern, in the province of Småland. Jönköping is the
                    seat of Jönköping Municipality and the capital of Jönköping County. Jönköping is an old trading
                    center (Köping) situated at a natural crossroads for routes following the rivers Nissan and Lagan,
                    and the road connecting the provinces of Östergötland and Västergötland, a result of the town's
                    geographical position at the southern end of lake Vättern, which divides the two provinces.
                </p>
                <Slider slides={[
                    {
                        type: "image",
                        url: JonkopingImageOne
                    },
                    {
                        type: "image",
                        url: JonkopingImageTwo
                    },
                    {
                        type: "image",
                        url: JonkopingImageThree
                    }
                ]}/>
            </div>

            <div className={"col-8 p-5 card-text mx-auto"}>
                <div className={"d-flex flex-row justify-content-between"} style={{
                    border: "1px solid #f2f2f2",

                }}>
                    <h2>Latest news</h2>
                    <a href={"/news"}>See all news</a>
                </div>
                <div className="col-11">
                    <Item title={"News 1"}
                          content={"This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news."}
                          image={"https://placehold.co/300"} url={"/news"}
                          author={"John Doe"} category={<span className={"text-danger"}>Technology</span>} time={"10 minutes ago"} readTime={"5 min read"}
                    />
                    <Item title={"News 1"}
                          content={"This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news."}
                          image={"https://placehold.co/300"} url={"/news"}
                          author={"John Doe"} category={<span className={"text-danger"}>Technology</span>} time={"10 minutes ago"} readTime={"5 min read"}
                    />
                    <Item title={"News 1"}
                          content={"This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news. This is the first news."}
                          image={"https://placehold.co/300"} url={"/news"}
                          author={"John Doe"} category={<span className={"text-danger"}>Technology</span>} time={"10 minutes ago"} readTime={"5 min read"}
                    />
                </div>
            </div>
            <div className={"col-10"} style={{ margin: "auto"}}>
                <Venue/>
                <Venue/>
                <Venue/>
                <Venue/>
                <Venue/>
                <Venue/>
            </div>
            {/* Open hours section built on Jumbotron */}
            <Jumbotron title={"Open hours"}
                       text={"The open hours varies depending on the shop, restaurant or library. Please check the webpage of\n" +
                           "                    the place you are interested in. But in general, the shops are open from 10:00 to 20:00, the\n" +
                           "                    restaurants are open from 11:00 to 22:00 and the library is open from 10:00 to 18:00."}
                       image={JonkopingImageOne}
                       additionalElement={<a href={"/contact"} className={"btn btn-primary"}>Contact us</a>}/>
            <SocialMedia/>
        </>

    );
}

export default Home;