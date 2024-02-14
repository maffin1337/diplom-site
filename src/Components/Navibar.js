import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../Images/Logo.png";

export default function NaviBar(){
    return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="FEFEFE">
            <Navbar.Brand><Link to="/"><img
            src={Logo}
            width="178"
            height="100"
            className="d-inline-block align-top"
            alt="logo"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/news">Новости</Nav.Link>
                    <Nav.Link as={Link} to="/classes">Мастер-классы</Nav.Link>
                    <Nav.Link as={Link} to="/about">О нас</Nav.Link>
                    <Nav.Link as={Link} to="/contest">Принять участие</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)}