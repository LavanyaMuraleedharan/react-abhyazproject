import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./App.css";
function Navbardec() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Edugain</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{ paddingRight: "30px" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#courses" style={{ paddingRight: "30px" }}>
                  Courses
                </Nav.Link>
                <Nav.Link href="#explore" style={{ paddingRight: "30px" }}>
                  Explore
                </Nav.Link>
                <Nav.Link href="#services" style={{ paddingRight: "30px" }}>
                  Services
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navbardec;
