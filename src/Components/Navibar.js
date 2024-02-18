import './Navibar.css';
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../Images/Logo.png";


export default function NaviBar(){
    return(
    <>
        <Navbar className="navbar" collapseOnSelect expand="xxl">
            <Navbar.Brand className="nav-logo"><Link to="/"><img
            src={Logo}
            alt="logo"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className="nav-link" as={Link} to="/news">Новости</Nav.Link>
                    <Nav.Link className="nav-link" as={Link} to="/classes">Мастер-классы</Nav.Link>
                    <Nav.Link className="nav-link" as={Link} to="/about">О нас</Nav.Link>
                    <Nav.Link className="nav-link" as={Link} to="/contest">Принять участие</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)}