import React, {useState} from "react";
import {Container, Dropdown, DropdownButton, Form} from "react-bootstrap";
import Axios from "axios";
import "./Contest.css";

function AddContest(){

    const [style, setStyle] = useState("");
    const [numberName, setNumberName] = useState("");
    const [crewName, setCrewName] = useState("");
    const [director, setDirector] = useState("");
    const [crewCount, setCrewCount] = useState("");

    const titleToVar = (title) => {
        setStyle(title);
    }

    const addContest = () => {
        Axios.post("http://localhost:3002/api/addcontest", {style: style, numberName: numberName, crewName: crewName, director: director, crewCount: crewCount})
    }

    return (
        <div className="contest-form">
            <Form>
                <DropdownMenu className="contest-form-item" onTitleChange={titleToVar}/>
                <Form.Control className="contest-form-item" type="text" onChange={(e) => {
                    setNumberName(e.target.value)
                }} placeholder="Название номера" />
                <Form.Control className="contest-form-item" type="text" onChange={(e) => {
                    setCrewName(e.target.value)
                }} placeholder="Название команды" />
                <Form.Control className="contest-form-item" type="text" onChange={(e) => {
                    setDirector(e.target.value)
                }} placeholder="ФИО руководителя" />
                <Form.Control className="contest-form-item" type="number" onChange={(e) => {
                    setCrewCount(e.target.value)
                }} placeholder="Количество участников" />
                <Form.Control className="contest-form-item" type="submit" onClick={addContest} placeholder="Отправить" />
            </Form>
        </div>
    )
}

function DropdownMenu({ onTitleChange }) {
    // State to manage the title of the dropdown
    const [title, setTitle] = useState('Выберите направление');
  
    // Function to handle selection change
    const handleSelect = (eventKey) => {
      // Update the title based on the selected option
      setTitle(eventKey);
      onTitleChange(eventKey);
    };
  
    return (
        <div className="dropdown-container">
            <DropdownButton
                id="dropdown-basic-button"
                className="dropdown-button-custom"
                title={title} // Set the title of the dropdown button
                onSelect={handleSelect} // Attach the handleSelect function to handle selection changes
            >
                <Dropdown.Item eventKey="Танцевальное направление">Танцевальное направление</Dropdown.Item>
                <Dropdown.Item eventKey="Вокал и ВИА">Вокал и ВИА</Dropdown.Item>
                <Dropdown.Item eventKey="Театральное направление">Театральное направление</Dropdown.Item>
                <Dropdown.Item eventKey="Изобразительное искусство">Изобразительное искусство</Dropdown.Item>
            </DropdownButton>
        </div>
    );
  }
  
  //export default DropdownMenu;
  export default AddContest;


export const Contest = () => (
    <>
        <Container className="contest-container">
            <div className="contest-form">
                <AddContest/>
            </div>
            <div className="contest-info">
                <p>Перед заполнением заявки на конкурс, прочтите положение конкурса</p>
            </div>
        </Container>
    </>
)

