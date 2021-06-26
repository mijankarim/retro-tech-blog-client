import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Container className="py-2">
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" variant="light">
              <Navbar.Brand>
                <Link to="/">Retro Tech Blog</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex justify-content-center">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/login">Login</Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    )
}

export default Header;
