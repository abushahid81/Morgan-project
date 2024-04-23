import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className='bg-dark mt-5 pt-5 text-white'>
      <Row>
        <Col xs lg="6">
          <p>&copy;Copyright All Rights Reserved</p>
        </Col>
        <Col xs lg="6">
          <p className='text-end'>Abushahid</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
