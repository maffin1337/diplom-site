import React, { useState, useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import Axios from "axios";

function SliderHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3002/api/getnewsmain")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
            });
    }, []);

    return (
        <Carousel>
            {data.map((val, index) => (
                <Carousel.Item key={index}>
                    <Image src={`http://localhost:3002/uploads/${val.Image}`} className="news-img" alt="news-img"/>
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <div className="news-slider-title">
                            <p>{val.Title}</p>
                        </div>
                        <div className="news-slider-text">
                            <p>{val.MainText.length > 50 ? val.MainText.substring(0, 50) + "..." : val.MainText}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default SliderHome;
