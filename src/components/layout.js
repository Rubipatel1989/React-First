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
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Container className="py-4">
            {children}
        </Container>
    </>
);

export default Layout;
