import { Carousel } from "react-bootstrap";
import React from "react";
import about1 from "../Images/About1.jpg";
import about2 from "../Images/About2.jpg";
import about3 from "../Images/About3.jpg";
import about4 from "../Images/About4.jpg";
import about5 from "../Images/About5.jpg";


export default function Slider(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={about1}
                    alt="about-img"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={about2}
                    alt="about-img"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={about3}
                    alt="about-img"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={about4}
                    alt="about-img"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={about5}
                    alt="about-img"
                />
            </Carousel.Item>
        </Carousel>
    )
}