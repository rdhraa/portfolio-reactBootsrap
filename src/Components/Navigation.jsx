import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="p-3 justify-content-between bg-dark"  expand="lg">
      <Navbar.Brand href="#home" className="text-warning">
        <Image src="logocopy.png" alt="Logo" width="65" height="60" /> SG
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" className="text-warning bg-warning" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="text-warning">Home</Nav.Link>
          <Nav.Link href="#about" className="text-warning">About</Nav.Link>
          <Nav.Link href="#skills" className="text-warning">Skills</Nav.Link>
          <Nav.Link href="#education" className="text-warning">Education</Nav.Link>
          <Nav.Link href="#experience" className="text-warning">Experience</Nav.Link>
          <Nav.Link href="#mentorship" className="text-warning">Mentorship</Nav.Link>
          <Button variant="outline-warning">Say Hello</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

