import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "gatsby";

const Layout = ({ children }) => (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">MyWebsite</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products-page">Products</Nav.Link>
                    <Nav.Link as={Link} to="/pricing-page">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/contact-page">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/about-page">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Container className="py-4">
            {children}
        </Container>
    </>
);

export default Layout;
