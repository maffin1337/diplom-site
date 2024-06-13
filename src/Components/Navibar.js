import './Navibar.css';
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { handleLogout } from '../Pages/Login'; // Импорт функции handleLogout

export default function NaviBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
            setRole(localStorage.getItem('role'));
        };

        checkLoginStatus();

        window.addEventListener('storage', checkLoginStatus);

        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    const handleLogoutClick = async () => {
        await handleLogout(setIsLoggedIn, setRole);
    };

    return (
        <>
            <Navbar className="navbar" collapseOnSelect expand="xxl">
                <Navbar.Brand className="nav-logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link className="nav-link" as={Link} to="/news">Новости</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/classes">Мастер-классы</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/about">О нас</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/contest">Принять участие</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn ? (
                            <Button className='nav-button' onClick={handleLogoutClick}>Выход</Button>
                        ) : (
                            <div>
                                <Button className='nav-button' href='/login'>Вход</Button>
                                <Button className='nav-button' href='/register'>Регистрация</Button>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
