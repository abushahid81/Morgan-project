import React, { useState } from 'react';
import "./Shopping.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import project1 from '../Assets/project-1.jpg';
import project2 from '../Assets/project-2.jpg';
import project3 from '../Assets/project-3.jpg';
import project4 from '../Assets/project-4.jpg';
import project5 from '../Assets/project-5.jpg';
import project6 from '../Assets/project-6.jpg';
import { Col } from 'react-bootstrap';

function Shopping() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(Array(6).fill(false)); // Initialize showModal state with an array of false values

    const paintings = [
        {
            "image": project1,
            "title": "Sea Storm",
            "description": "This painting is one of my latest works on sea painting."
        },
        {
            "image": project2,
            "title": "Ruins of Ancient Fortress",
            "description": "When I have been to Scotland, I made this painting."
        },
        {
            "image": project3,
            "title": "Two Lovers",
            "description": "This work was finished in two days for my customer."
        },
        {
            "image": project4,
            "title": "Watercolor Portrait",
            "description": "Jane Williams, my friend and colleague, asked..."
        },
        {
            "image": project5,
            "title": "Birches in Autumn",
            "description": "I love painting autumn trees and this work is a..."
        },
        {
            "image": project6,
            "title": "Green Landscape",
            "description": "Another abstract work, which appeared at my..."
        }
    ];

    const handleClose = () => {
        setSelectedCard(null);
        setShowModal(prevState => {
            const newState = [...prevState];
            newState[selectedCard] = false; // Set the state of the selected card's modal to false
            return newState;
        });
    }

    const handleShow = (index) => {
        setSelectedCard(index);
        setShowModal(prevState => {
            const newState = [...prevState];
            newState[index] = true; // Set the state of the clicked card's modal to true
            return newState;
        });
    }

    return (
        <>
         <Container>
          <Row>
                <div className='row gap-5 ms-5'>
                   <h1 className='text-center'>My Paintings</h1>
                {paintings.map((item, index) => (
                    <Col className='pt-5' lg={3}>
                    <Card style={{ width: '22rem' }} key={index}> 
                    <Card.Img variant="top" src={item.image} height={'400rem'} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <div className='flex justify-content-between'>
                           <Button variant="light" className='border border-black rounded-pill button-1' onClick={() => handleShow(index)}>View Detail</Button>
                            <h3 className='text-end'>$200</h3>
                        </div>
                    
                    
                    
                    <Modal
                        show={showModal[index]} // Use showModal state for each card
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{item.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={item.image} alt='modalimage' /><br/>
                            {item.description}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary">Understood</Button>
                        </Modal.Footer>
                    </Modal>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </div>
      </Row>
    </Container>
     
        </>
    );
}

export default Shopping;
