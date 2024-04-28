import React from 'react'
import "./Contact.css";
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';





const Contact = () => {
  return (
    <>
    <div className='about-img bg-dark-overlay'>
      <h2 className='text-light text-center contact-u'>CONTACTS</h2>
    </div>
<Container>
  <Row>
    <Col className='pt-5'>
    <div className='ms-5'>
      <h2>Get in Touch</h2>
    </div>
              <div class="card border p-4 shadow">
              
                <div class="mb-3">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input type="text" class="form-control username" id="exampleFormControlInput1" placeholder="Enter Full Name"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input type="email" class="form-control email" id="exampleFormControlInput1" placeholder="Enter Email Address"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1">Password</label>
                  <input type="password" class="form-control password" id="exampleFormControlInput1" placeholder="Password"/>
                </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="flexCheckIndeterminate"/>
                    <label class="form-check-label" for="flexCheckIndeterminate">
                      Check me out
                    </label>
                  </div>
                  <div class="mt-4">
                  <Button variant="outline-secondary" className='rounded-pill btn-change'>Learn More</Button> 
                  </div>
              </div>
           
    </Col>
    <Col >
    <div className='adss mt-5'>
      <h2>Our Address</h2>
      
       <p><i className="mt-1"></i>2130 Fulton Street, San Diego, USA</p>
      <p><i className="mt-1"></i>1-800-1234-567</p>
       <p><i className="mt-1"></i> info@demolink.org</p>
       <iframe  className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2247877368627!2d72.82848047562901!3d18.965677455425848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1714287382302!5m2!1sen!2sin" width={500}  height={280} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </div>
             
    </Col>
  </Row>
</Container>

        {/* <div className='contact-x'>
          
        </div>
        <div className='contact-z'>
        <h2>Our Adderss</h2>
       <p><i class="bi bi-building-fill p-1 m"></i>2130 Fulton Street, San Diego, USA</p> 
       <p><i class="bi bi-telephone-fill"></i>1-800-1234-567</p> 
       <p><i class="bi bi-envelope-at"></i>info@demolink.org</p> 
       </div> */}
        
 
  </>
  )
}

export default Contact;

