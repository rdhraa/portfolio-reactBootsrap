import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'

const More = () => {
  return (
    <div className="bg-dark py-4"  height={150}>
      <Container className="text-center">
        <Row>
          <Col>
            
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaGithub size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaTwitter size={30} />
            </a>
          </Col>
          <h6 className="text-white mt-3">copyright@2024</h6>
        </Row>
      </Container>
    </div>
  )
}

export default More
