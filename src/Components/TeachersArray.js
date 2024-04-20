import React, {useState} from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";
import "../Pages/Classes.css";
import Dance1 from "../Images/Dance1.jpg";
import Dance2 from "../Images/Dance2.jpg";
import Dance3 from "../Images/Dance3.jpg";
import Art1 from "../Images/Art1.jpg";
import Art2 from "../Images/Art2.jpg";
import Art3 from "../Images/Art3.jpg";
import Art4 from "../Images/Art4.jpg";


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
                        <p>Балетмейстер ДОАЭТ Улыбка и НАЭТ Ассорти</p>
                        <p>Лауреат Всероссийских и международных конкурсов</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow("dance_class10")}>Записаться</Button>
                    </div>
                </Container>
                <Container className="dance-class">
                    <img
                        src={Dance2}
                        alt="dance-class10"
                        className="dance-class-img"
                    />
                    <div className="dance-class-text">
                        <p className="dance-class-first">Брейкинг</p>
                        <p>Преподаватель: Константин Яковлев</p>
                        <p>Тренер команды Grizzly Squad. Участник союза танцевального спорта РМЭ.</p>
                        <p>Серебряный призер чемпионата РМЭ по брейкингу 2022. Участник команды организаторов Хип-Хоп и брейкинг фестивалей.</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow("dance_class11")}>Записаться</Button>
                    </div>
                </Container>
                <Container className="dance-class">
                    <img
                        src={Dance3}
                        alt="dance-class10"
                        className="dance-class-img"
                    />
                    <div className="dance-class-text">
                        <p className="dance-class-first">Dancehall</p>
                        <p>Преподаватель: Ксения Михеева</p>
                        <p>Мисс Sport&Beauty 2020, China workshops 2023, команда G-Fot FotFamily г. Москва 2022-2023</p>
                        <p>1 место: Grand Premium (Санкт-Петербург 2016). 2 место: on Heels (Казань 2021)</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow("dance_class12")}>Записаться</Button>
                    </div>
                </Container>
                <Container className="dance-class">
                    <img
                        src={Art1}
                        alt="dance-class10"
                        className="dance-class-img"
                    />
                    <div className="dance-class-text">
                        <p className="dance-class-first">Основы Stand Up</p>
                        <p>Преподаватели: Александр Шамов, Роман Хуснутдинов, Алексей Лукьянов</p>
                        <p>Участники проектов: Открытый микрофон на ТНТ, Comedy Battle на ТНТ, Open Mic в Вконтакте</p>
                        <p>Имеют опыт сольных выступлений на аудиторию свыше 500 человек и свыше 1000 публичных выступлений на различную аудиторию</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow("art_class10")}>Записаться</Button>
                    </div>
                </Container>
                <Container className="dance-class">
                    <img
                        src={Art2}
                        alt="dance-class10"
                        className="dance-class-img"
                    />
                    <div className="dance-class-text">
                        <p className="dance-class-first">От идеи до сценария. как создавать вселенные</p>
                        <p>Преподаватель: Денис Шаблий</p>
                        <p>Режиссер, актер, ведущий, общественный деятель</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow("art_class11")}>Записаться</Button>
                    </div>
                </Container>
                <Container className="dance-class">
                    <img
                        src={Art3}
                        alt="dance-class10"
                        className="dance-class-img"
                    />
                    <div className="dance-class-text">
                        <p className="dance-class-first">Креатив. Юмор. Уверенность. Работа в команде</p>
                        <p>Преподаватель: Екатерина Гребнева</p>
                        <p>Преподаватель речи и вокала, медиатренер по работе в кадре, блогер</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow("art_class12")}>Записаться</Button>
                    </div>
                </Container>
                <Container className="dance-class">
                    <img
                        src={Art4}
                        alt="dance-class10"
                        className="dance-class-img"
                    />
                    <div className="dance-class-text">
                        <p className="dance-class-first">Музыкальный менеджмент</p>
                        <p>Преподаватели: Станислав Топоров и певица IDA</p>
                        <p>Предприниматель, бизнес-тренер, продюсер и диджей проекта IDA SINGER</p>
                        <p>Автор-испольнитель, сонграйтер и саунд дизайнер, музыкальный блогер</p>
                    </div>
                    <div className="classes-signin">
                        <Button className="classes-signin-button" onClick={() => handleShow("art_class12")}>Записаться</Button>
                    </div>
                </Container>
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
            </Container>
        </>
    )
}

export default SignIn;