import React from 'react'
import "./Contact.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Contact = () => {
  return (
    <>

    <section className='about-img bg-dark-overlay'>
      <h2 className='text-light text-center contact-u'>CONTACTS</h2>
        <div className='contact-x'>
          <h2>Get in Touch</h2>
        </div>
        <div className='contact-z'>
        <h2>Our Adderss</h2>
       <p><i class="bi bi-building-fill p-1 m"></i>2130 Fulton Street, San Diego, USA</p> 
       <p><i class="bi bi-telephone-fill"></i>1-800-1234-567</p> 
       <p><i class="bi bi-envelope-at"></i>info@demolink.org</p> 
       </div>
        
  </section>
  </>
  )
}

export default Contact;

