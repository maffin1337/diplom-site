import React, {useState} from "react";
import {Container, Dropdown, DropdownButton, Form} from "react-bootstrap";
import "./Contest.css";

function DropdownMenu() {
    // State to manage the title of the dropdown
    const [title, setTitle] = useState('Выберите направление');
  
    // Function to handle selection change
    const handleSelect = (eventKey) => {
      // Update the title based on the selected option
      setTitle(eventKey);
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
  
  export default DropdownMenu;


export const Contest = () => (
    <>
        <Container className="contest-container">
            <div className="contest-form">
                <Form>
                    <DropdownMenu className="contest-form-item" />
                    <Form.Control className="contest-form-item" type="text" placeholder="Название номера" />
                    <Form.Control className="contest-form-item" type="text" placeholder="Название команды" />
                    <Form.Control className="contest-form-item" type="text" placeholder="ФИО руководителя" />
                    <Form.Control className="contest-form-item" type="number" placeholder="Количество участников" />
                    <Form.Control className="contest-form-item" type="submit" placeholder="Отправить" />
                </Form>
            </div>
            <div className="contest-info">
                <p>Перед заполнением заявки на конкурс, прочтите положение конкурса</p>
            </div>
        </Container>
    </>
)

