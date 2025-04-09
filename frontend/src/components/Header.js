import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import favicon from "../assets/images/favicon.ico"; 
import logo from "../assets/images/logo.png";
import web_content from "../assets/web_content.json"

function Header() {
    return (
        <>
            <link rel="icon" href={favicon} />
            <title>{web_content.brand}</title>
            <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    {/* Clickable Logo and Brand Title */}
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                    {/* Logo */}
                    <img src={logo} alt="Robust Binary Logo" width="40" height="40" className="mr-2" />
                    {/* Brand Title */}
                    <span>{web_content.title}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            
                            {/* Dropdown for Objectives */}
                            {web_content.product_category.map((item, index) => (
                                <NavDropdown title={item.heading} id="objectives-dropdown">
                                    {web_content.product_list.map((item, index) => (
                                        <NavDropdown.Item key={index} href={`/objective/${index + 1}`}>
                                        {item.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>  
                            ))}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;