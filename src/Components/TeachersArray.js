import React, { useState } from "react";
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

const classesData = [
  {
    image: Dance1,
    alt: "dance-class10",
    title: "Современный танец",
    teacher: "Анастасия Богатырева",
    details: [
      "Балетмейстер ДОАЭТ Улыбка и НАЭТ Ассорти",
      "Лауреат Всероссийских и международных конкурсов"
    ],
    classId: "dance_class10"
  },
  {
    image: Dance2,
    alt: "dance-class11",
    title: "Брейкинг",
    teacher: "Константин Яковлев",
    details: [
      "Тренер команды Grizzly Squad. Участник союза танцевального спорта РМЭ.",
      "Серебряный призер чемпионата РМЭ по брейкингу 2022. Участник команды организаторов Хип-Хоп и брейкинг фестивалей."
    ],
    classId: "dance_class11"
  },
  {
    image: Dance3,
    alt: "dance-class12",
    title: "Dancehall",
    teacher: "Ксения Михеева",
    details: [
      "Мисс Sport&Beauty 2020, China workshops 2023, команда G-Fot FotFamily г. Москва 2022-2023",
      "1 место: Grand Premium (Санкт-Петербург 2016). 2 место: on Heels (Казань 2021)"
    ],
    classId: "dance_class12"
  },
  {
    image: Art1,
    alt: "art-class10",
    title: "Основы Stand Up",
    teacher: "Александр Шамов, Роман Хуснутдинов, Алексей Лукьянов",
    details: [
      "Участники проектов: Открытый микрофон на ТНТ, Comedy Battle на ТНТ, Open Mic в Вконтакте",
      "Имеют опыт сольных выступлений на аудиторию свыше 500 человек и свыше 1000 публичных выступлений на различную аудиторию"
    ],
    classId: "art_class10"
  },
  {
    image: Art2,
    alt: "art-class11",
    title: "От идеи до сценария. как создавать вселенные",
    teacher: "Денис Шаблий",
    details: ["Режиссер, актер, ведущий, общественный деятель"],
    classId: "art_class11"
  },
  {
    image: Art3,
    alt: "art-class12",
    title: "Креатив. Юмор. Уверенность. Работа в команде",
    teacher: "Екатерина Гребнева",
    details: [
      "Преподаватель речи и вокала, медиатренер по работе в кадре, блогер"
    ],
    classId: "art_class12"
  },
  {
    image: Art4,
    alt: "art-class13",
    title: "Музыкальный менеджмент",
    teacher: "Станислав Топоров и певица IDA",
    details: [
      "Предприниматель, бизнес-тренер, продюсер и диджей проекта IDA SINGER",
      "Автор-испольнитель, сонграйтер и саунд дизайнер, музыкальный блогер"
    ],
    classId: "art_class13"
  }
];

function SignIn() {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const [selectedClass, setSelectedClass] = useState("");
  const [fullName, setFullName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (classTitle) => {
    setSelectedClass(classTitle);
    setShow(true);
  };

  const addClass = () => {
    Axios.post("http://localhost:3002/api/addclass", { classes: selectedClass, fullName: fullName })
      .then(() => setShow(false))
      .catch(error => console.error(error));
  };

  return (
    <>
      <Container className="dance-classes">
        {classesData.map((classItem, index) => (
          <Container key={index} className="dance-class">
            <img
              src={classItem.image}
              alt={classItem.alt}
              className="dance-class-img"
            />
            <div className="dance-class-text">
              <p className="dance-class-first">{classItem.title}</p>
              <p>Преподаватель: {classItem.teacher}</p>
              {classItem.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
            <div className="classes-signin">
              <Button className="classes-signin-button" onClick={() => handleShow(classItem.classId)}>Записаться</Button>
            </div>
          </Container>
        ))}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Запись на мастер-класс</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLoggedIn ? (
              <div>
                <Form.Control type="text" placeholder="ФИО" onChange={(e) => {
                  setFullName(e.target.value)
                }} />
              </div>
            ) : (
              <div className="master-auth-text">
                <p>Записаться на мастер-класс могут только авторизированные пользователи</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            {isLoggedIn ? (
              <div>
                <Button onClick={handleClose}>Отмена</Button>
                <Button onClick={addClass}>Записаться</Button>
              </div>
            ) : null}
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default SignIn;
