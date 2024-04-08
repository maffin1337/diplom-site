import React from "react";
import "./Footer.css";
import footer_img from "../Images/footer.png";
import {Container} from "react-bootstrap";

export default function Footer(){
    return(
        <>
        <Container className="footer">
            <img
            src={footer_img}
            alt="footer-img"
            ></img>
        </Container>
        </>
    )
}