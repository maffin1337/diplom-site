import Axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const generateHashPassword = async () => {
        try {
            const encoder = new TextEncoder();
            const data = encoder.encode(password);
            const hash = await window.crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hash));
            const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
            return hashHex;
        } catch (error) {
            console.error('Error generating hash password:', error);
            setError('Ошибка при генерации пароля');
            throw error;
        }
    };

    const addUser = async () => {
        if (password === passwordCheck) {
            const hashedPassword = await generateHashPassword();
            console.log('Hashed password:', hashedPassword); // Logging for debugging
            Axios.post("http://localhost:3002/api/adduser", { email: email, password: hashedPassword })
            setSuccess("Регистрация прошла успешно. Перенаправление на страницу авторизации...");
            setTimeout(() => navigate("/login"), 3000); // Перенаправление через 3 секунды
        } else {
            setError("Пароли не совпадают");
        }
    };

    return (
        <>
            <Container className="register-container">
                <Form className="register-form">
                    <Form.Control className="register-form-item" type="email"
                        onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />
                    <Form.Control className="register-form-item" type="password"
                        onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
                    <Form.Control className="register-form-item" type="password"
                        onChange={(e) => setPasswordCheck(e.target.value)} placeholder="Повторите пароль" />
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                </Form>
                <Button className="register-button" onClick={addUser}>Зарегистрироваться</Button>
            </Container>
        </>
    );
}

export default Registration;

export const Register = () => {
    return <Registration />;
}
