import React from 'react';
import "./Service.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import portrait1 from '../assets/services-1.jpg';
import portrait2 from '../assets/portrait-2.jpg';
import portrait3 from '../assets/portrait-3.jpg';
import portrait4 from '../assets/portrait-4.jpg';
import portrait5 from '../assets/portrait-5.jpg';

function Service() {
  return (
    <>
    <section className='about-img bg-dark-overlay'>
      <div>
        <h2 className='text-light text-center service-u'>SERVICES</h2>
      </div>
    </section>
    <section>
    <Container>
      <Row>
        <Col lg="6">
            <img src={portrait1} alt="services1" className='rounded-3 mt-5 me-5 shadow img-fluid' />
        </Col>
        <Col lg="6">
        <h2 className='mt-5'>Service Description</h2>
        <p className='fs-5 mt-1'>There are always situations that call for more than just a photograph. 
               Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up!
               A portrait is a representation of a particular person. Such paintings have always been more than just a record.
               They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important
               qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
               <Button variant="outline-secondary" className='rounded-pill btn-change'>Learn More</Button>
        </Col>
        <Col lg="6">
            <img src={portrait2} alt="services1" className='rounded-3 mt-5 me-5 shadow img-fluid' />
        </Col>
        <Col lg="6">
            <img src={portrait3} alt="services1" className='rounded-3 mt-5 me-5 shadow img-fluid' />
            <p className='mt-5 me-3 text-end text-to'>Oil on Canvas of a Little Girl</p>
            <p className=''>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
        </Col>
        <Col lg="6">
            <img src={portrait4} alt="services1" className='rounded-3 mt-5 me-5 shadow img-fluid' />
            <p className='mt-5 me-3 text-end text-to'>Oil on Canvas of a Little Girl</p>
            <p>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
        </Col>
        <Col lg="6">
            <img src={portrait5} alt="services1" className='rounded-3 mt-5 me-5 shadow img-fluid' />
        </Col>
      </Row>
    </Container>
    </section>
    </>
  );
}

export default Service;