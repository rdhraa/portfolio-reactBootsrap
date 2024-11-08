import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Contactform = () => {
  return (
    <div>
      <div className="bg-warning p-5" style={{ minHeight: '90vh'}} >
        <Container>
          <Row className="d-flex justify-content-between">
            {/* Form Column */}
            <Col xs={12} md={6} className="align-items-center">
            <h3>Contact Me</h3>
              <Form style={{ maxWidth: '100%', margin: 'auto', border: '2px solid black', borderRadius:'10px'}}
              className="bg-dark p-5">
                <Form.Group>
                  <Form.Label className="text-warning">Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                  <Form.Text className="text-warning " >
                    We'll never share your personal details with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label className="text-warning">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email id" />
                </Form.Group>

                <Button variant="warning mt-2" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>

            {/* Card Column */}
            <Col xs={12} md={6} className="align-items-center">
            
              <Row>
              <h3>About Me</h3>
                <Col xs={12} md={6} lg={4}>
                  <Card style={{ margin: 10,maxHeight:300, }} className="bg-dark text-warning">
                    <Card.Img variant="top" src="/project.jpg" height={200} />
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title>PROJECTS</Card.Title>
                      <Button variant="warning">View Projects</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Card style={{ margin: 10,maxHeight:300 }} className="bg-dark text-warning">
                    <Card.Img variant="top" src="/resume.jpg" height={200} />
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title>RESUME</Card.Title>
                      <Button variant="warning">View Resume</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Card style={{ margin: 10,maxHeight:300 }} className="bg-dark text-warning" >
                    <Card.Img variant="top" src="/portfolio.jpg" height={200} />
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title>PORTFOLIO</Card.Title>
                      <Button variant="warning">See Portfolio</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contactform;
