import React from "react";
import Slider from "../components/Slider/Slider";
import Image2 from "../data/slide2.jpg";
import Card from "../components/Card/Card";
import SalesImage from "../data/sales.jpg";
import RestaurantImage from "../data/restaurants.jpg";
import LibraryImage from "../data/library.jpg";

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

                <Card title={"Shopping"} image={SalesImage}
                      text={"You can find almost all famous brands here including HM, Zara and etc."} additionalStyle={{
                    backgroundColor: "#ff4dd2",
                    color: "#fff"
                }}/>
                <Card title={"Restaurants and coffee!"} image={RestaurantImage}
                      text={"There is at least one restaurant for each taste."} additionalStyle={{
                    backgroundColor: "#ff3333",
                    color: "#fff"
                }} imageInLeft={false}/>

                <Card title={"Read and borrow books!"} image={LibraryImage}
                      text={"At Jönköping library, you can read books, newspapers or borrow a book for up to 30 days."}
                      additionalStyle={{
                          backgroundColor: "#1a8cff",
                          color: "#fff"
                      }}/>
            </div>
        </>
    );
}

export default Home;