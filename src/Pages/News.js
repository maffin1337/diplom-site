import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./News.css";
import { Container, Button, Image, Modal } from "react-bootstrap";

function GetNews() {
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    const [postData, setPostData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setId(null);
    };
    const handleShow = (id) => {
        setShow(true);
        setId(id);
    };

    useEffect(() => {
        if (id) {
            Axios.get(`http://localhost:3002/api/getnewsbyId/${id}`)
                .then((response) => {
                    console.log(response);
                    setPostData(response.data); // response.data, not response.postData
                })
                .catch((error) => {
                    console.error('Error fetching news by ID:', error);
                });
        }
    }, [id]); // Added id as a dependency

    useEffect(() => {
        Axios.get("http://localhost:3002/api/getnews")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
            });
    }, []); // Empty dependency array for initial fetching only

    return (
        <>
            <Container className="news-container">
                {data.map((val, key) => (
                    <div className="post" key={key}>
                        <Container className="post-container">
                            <div className="post-header">
                                <p>{val.Title}</p>
                            </div>
                            <div className="post-items">
                                <Image src={`http://localhost:3002/uploads/${val.Image}`} alt="post-img" className="post-img" />
                                <div className="post-text">
                                    <p>{val.MainText.length > 50 ? val.MainText.substring(0, 50) + "..." : val.MainText}</p>
                                </div>
                                <Button className="watch-post-button" onClick={() => handleShow(val.ID)}>Посмотреть новость</Button>
                            </div>
                        </Container>
                    </div>
                ))}
                {postData.map((val, key) => (
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{val.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src={`http://localhost:3002/uploads/${val.Image}`} alt="one-post-img" className="one-post-img" />
                            <div className="one-post-text">
                                <p>{val.MainText}</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                ))}
            </Container>
        </>
    );
}

export default GetNews;


export const News = () => (
    <>
    <GetNews />
    </>
)