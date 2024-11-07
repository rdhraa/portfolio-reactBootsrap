import React from 'react';
import { Container, Image, Row, Col,Button } from 'react-bootstrap';

const Body = () => {
  return (
    <div className="bg-dark text-white py-5" >
      <Container>
      <Row className="align-items-center">
      <h3 className="text-left">I'm</h3>
      <h1 className="text-warning text-left"> SOPHIA GRACE,</h1>
      <Col xs={12} md={6} className="text-center py-3 my-5">
        <p className="fs-4">
        I am a full stack developer with a passion for building dynamic and user-friendly applications. With expertise in both front-end and back-end technologies, I enjoy creating seamless and efficient experiences for users. I am always eager to learn new frameworks and tools to enhance the functionality and scalability of my projects.
        </p>
        <Button variant="warning fs-4">Hire Me</Button>
      </Col>
      <Col xs={12} md={6} className="d-flex justify-content-center">
        <Image
          src="/woman.jpg"
          fluid
          rounded
        />
      </Col>
    </Row>
    </Container>
    </div>
  );
};

export default Body;

