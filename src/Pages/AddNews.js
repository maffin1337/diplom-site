import React, {useState} from "react";
import "./AddNews.css";
import {Container, Form } from "react-bootstrap";
import Axios from "axios";

function FileUpload() {

    const [file, setFile] = useState();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");


    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title); // Append title to FormData

        Axios.post("http://localhost:3002/api/postnews", { title: title, text: text })
            .then(res => {
                // Once the news is posted, proceed to upload the picture
            })
            .catch(err => console.log(err));
        Axios.post("http://localhost:3002/api/postpicture", formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set correct Content-Type header
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    

    

    return (
        <>
            <Container className="addnews-container">
                <div className="file-upload-text">
                    <p>Публикация новости</p>
                </div>
                <Form.Control className="file-upload" type="file" onChange={handleFile}/>
                <Form.Control className="file-upload" type="text" onChange={(e) => {
                    setTitle(e.target.value)
                }} placeholder="Название новости" />
                <Form.Group className="mb-3" controlId="newsForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} onChange={(e) => {
                        setText(e.target.value)
                    }} placeholder="Текст новости" />
                </Form.Group>
                <Form.Control className="file-upload" type="submit" onClick={handleUpload}/>
            </Container>
        </>
    )

}

export default FileUpload;

export const AddNews = () => (
    <FileUpload />
)