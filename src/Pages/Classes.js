import React, {useState} from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";
import "./Classes.css";
import Dance1 from "../Images/Dance1.jpg";

function SignIn(){

    const [classes, setClasses] = useState("");
    const [fullName, setFullName] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (classTitle) => {
        setClasses(`${classTitle}`);
        setShow(true);
    };

    const addClass = () => {
        Axios.post("http://localhost:3002/api/addclass", {classes: classes, fullName: fullName})
        setShow(false);
    }

    return (
        <>
            <Container className="dance-classes">
                <Container className="dance-class">
                    <img
                        src={Dance1}
                        alt="dance-class10"
                        className="dance-class-img"
                    />
                    <div className="dance-class-text">
                        <p className="dance-class-first">Современный танец</p>
                        <p>Преподаватель: Анастасия Богатырева</p>
                        <p>Балетмейстер ДОАЭТ "Улыбка" и НАЭТ "Ассорти"</p>
                        <p>Лауреат Всероссийских и международных конкурсов</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow('dance_class10')}>Записаться</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Запись на мастер-класс</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Control type="text" placeholder="ФИО" onChange={(e) => {
                                    setFullName(e.target.value)
                                }} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleClose}>Отмена</Button>
                                <Button onClick={addClass}>Записаться</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Container>
            </Container>
            <Container className="art-classes">

            </Container>
        </>
    )
}

export default SignIn;

export const Classes = () => (
    <Container className="classes-container">
        <SignIn />
    </Container>
)