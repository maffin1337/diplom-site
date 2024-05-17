import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Form } from "react-bootstrap";
import "./Login.css";

function LogIn() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.withCredentials = true;

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

        const isLoggedIn = localStorage.getItem('LoggedIn') === 'true';
        const savedRole = localStorage.getItem('role');

        if(isLoggedIn && savedRole) {
            setLoggedIn(true);
            setRole(savedRole);
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3002/api/login", { username, password });
            
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('role', response.data.role);
            
            setRole(response.data.role);
            setLoggedIn(true);
        } catch (error) {
            setError('Неправильный логин или пароль');
        }
    };

    const handleLogout = async () => {
        try {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('role');
            
            await axios.get("http://localhost:3002/api/logout");
            setLoggedIn(false);
            setRole('');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <Container className="login-container">
            {loggedIn ? (
                <div>
                    <div className="d-flex justify-content-center">
                        <Button className="logout-button" onClick={handleLogout}>Выйти</Button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="login-header">
                        <p>Авторизация</p>
                    </div>
                    <Form className="login-form">
                        <Form.Control className="login-form-item" type="text"
                            value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Логин" />
                        <Form.Control className="login-form-item" type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
                        <div className="d-flex justify-content-center">
                            <Button className="login-button" onClick={handleLogin}>Войти</Button>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Form>
                </div>
            )}
        </Container>
    );
}

export default LogIn;


export const Login = () => {
    return <LogIn />;
}