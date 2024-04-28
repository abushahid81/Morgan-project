import React from 'react'
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import still from '../Assets/still-life-1.jpg';


const About = () => {
  return (
    <>
    <section className='about-img bg-dark-overlay'>
      <div>
        <h2 className='text-light text-center about-u'>ABOUT</h2>
      </div>
    </section>
    <section>
    <Container>
      <Row>
        <Col lg="6">
        <h2 className='mt-5'>A Few Words About Us</h2>
        <p className='fs-5 mt-5 text-o'>There are always situations that call for more than just a photograph.
               Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up!
               A portrait is a representation of a particular person. Such paintings have always been more than just a record.
               They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities
               that characterize the sitter. It is one of the best ways to depict a person and show his/her character. 
               I am always ready to meet all your wishes and preferences in your portrait,
               whether it's created as a personal painting or a piece of art for an official person. 
               Contact me today to discuss your future portrait.</p>
               <Button variant="outline-secondary" className='rounded-pill btn-change'>Learn More</Button>
        </Col>
        <Col lg="6">
            <img src={still} alt="still-logo" className='rounded-3 mt-5 shadow img-fluid' />
        </Col>
      </Row>
    </Container>
    </section>
    </>
  )
}

export default About
