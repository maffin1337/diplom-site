import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const handleLogout = async (setIsLoggedIn, setRole) => {
    try {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('role');

        await axios.get("http://localhost:3002/api/logout");
        setIsLoggedIn(false);
        setRole('');
        window.location.reload();
    } catch (error) {
        console.error("Error logging out:", error);
    }
};

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const generateHashPassword = async (password) => {
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

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const response = await axios.get("http://localhost:3002/api/checkLoggedIn");
                if (response.data.loggedIn) {
                    setLoggedIn(true);
                    setRole(response.data.role);
                }
            } catch (error) {
                console.error("Error checking logged in status:", error);
            }
        };

        checkLoggedIn();

        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        const savedRole = localStorage.getItem('role');

        if (isLoggedIn && savedRole) {
            setLoggedIn(true);
            setRole(savedRole);
        }
    }, []);

    const handleLogin = async () => {
        try {
            const hashedPassword = await generateHashPassword(password);
            const response = await axios.post("http://localhost:3002/api/login", { email, password: hashedPassword });

            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('role', response.data.role);
            setRole(response.data.role);
            setLoggedIn(true);
            setError(''); // Clear any previous error message
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Неправильный логин или пароль');
        }
    };

    return (
        <Container className="login-container">
            <div className="login-header">
                <p>Авторизация</p>
            </div>
            <Form className="login-form">
                <Form.Control className="login-form-item" type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />
                <Form.Control className="login-form-item" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
                <div className="d-flex justify-content-center">
                    <Button className="login-button" onClick={handleLogin}>Войти</Button>
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
            </Form>
        </Container>
    );
}

export default LogIn;

export const Login = () => {
    return <LogIn />;
}
