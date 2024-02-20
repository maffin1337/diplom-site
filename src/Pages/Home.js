import "./Home.css";
import React from "react";
import { Container, Button } from "react-bootstrap";

export const Home = () => (
    <>
    <Container className="news-carousell">

    </Container>
    <Container className="events">
        <div className="events-head-text">
            <p>Ближайшие мероприятия</p>
        </div>
    </Container>
    <Container className="master-class-main">
        <div className="mc-head-text">
            <p>Хочешь записаться на мастер-класс?</p>
        </div>
        <div className="mc-main-text">
            <p>Ты можешь посмотреть какие мастер-классы будут на нашем фестивале и записаться на любой понравившийся</p>
        </div>
        <div className="d-flex justify-content-center">
            <Button href="/classes" className="mc-button">Все мастер-классы</Button>
        </div>
    </Container>
    <Container className="contest-main">
        <div className="contest-head-text">
            <p>Хочешь принять участие в конкурсе?</p>
        </div>
        <div className="contest-main-text">
            <p>Ты можешь отправить заявку на участие в конкурсе в любом из направлений: вокал, хореография, театр, изобразительное искусство</p>
        </div>
        <div className="d-flex justify-content-center">
            <Button href="/contest" className="mc-button">Принять участие</Button>
        </div>
    </Container>
    </>
)