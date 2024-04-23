import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/mainlogo.png";
import "./Header.css";

function Header() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top line-point">
      <Container>
        <Navbar.Brand href="/"><img src={logo}alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end">
            <Nav.Link href="/" className='ms-5 navbt'>Home</Nav.Link>
            <Nav.Link href="/About" className='ms-5 navbt'>About</Nav.Link>
            <Nav.Link href="/Service" className='ms-5 navbt'>Service</Nav.Link>
            <Nav.Link href="/Blog" className='ms-5 navbt' >Blog</Nav.Link>
            <Nav.Link href="/Contact" className='ms-5 navbt'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
    </div>
  ); 
}

export default Header;




