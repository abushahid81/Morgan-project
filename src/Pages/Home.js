import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import brand from "../Assets/brand-inverse.png";
import home from "../Assets/home.jpg";
import "./Home.css";
import Shopping from '../Component/Shopping';


function Home() {


  

  return (
    <>
    {/* Banner */}
    <section className='banner bg-dark-overlay'>
    <Container>
      <Row>
        <Col lg='6'>
          <Image src={brand} className='img-fluid brand-log' alt='brand-logo' />
        </Col>
      </Row>
    </Container>
    </section>
    {/* second content  */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <h1 className='mt-5'>A Few Words About Me</h1>
            <p className='mt-5 fs-5'>My name is Samantha Morgan, and I have been a fine artist since my youth. 
              I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. 
              I strongly believe that art is a global form of communication. 
              It educates visually by either moving you, pleasing you, or even inspiring you.
              </p>
              <button type="button" className="btn btn-outline-warning rounded-pill button-zero">Learn More</button>
              </Col>
              <Col lg="6">
              <img src={home} className='mt-5 img-fluid rounded-2 shadow img-home' alt='home'/>
              </Col>
        </Row>
      </Container>
    </section>
    {/* third content */}
    <section className='mt-5'>
      <Container>
        <Row>
            <h1 className='text-center'>My Paintings</h1>
          <Shopping/>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Home;

