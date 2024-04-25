import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import "./Home.css";
import home from "../assets/home.jpg";
import brand from "../assets/brand.png";
import Shopping from '../Component/Shopping';
import user from '../assets/user.png';
import leaf from '../assets/leaf.png';
import house from '../assets/house.png';
import apple from '../assets/apple-logo.png';

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
          <Shopping/>
    </section>
    {/* third content */}
    <section className='mt-5 pt-5'>
      <Container>
        <Row>
            <Col lg="12" className='text-center'>
            <h2>Services</h2>
            <p className='fs-5 p-text'>If you are looking for custom paintings, which will decorate your home or office,
                 consider booking one or several of<br/> my services listed below. 
                They will add more colors and emotions to your daily life.</p>
            </Col>
            <Col lg="3" className='change-box'>
              <div className='rounded shadow box-change'>
                <div className='text-center my-5 py-5'>
                  <img src={user} alt="contact" />
                  <h2>Portrait</h2>
                </div>
              </div>
            </Col>
            <Col lg="3" className='change-box'>
              <div className='rounded shadow box-change'>
                <div className='text-center my-5 py-5'>
                  <img src={leaf} alt="" />
                  <h2>Portrait</h2>
                </div>
              </div>
            </Col>
            <Col lg="3" className='change-box'>
              <div className='rounded shadow box-change'>
                <div className='text-center my-5 py-5'>
                  <img src={apple} alt="" />
                  <h2>Portrait</h2>
                </div>
              </div>
            </Col>
            <Col lg="3" className='change-box'>
              <div className='rounded shadow box-change'>
                <div className='text-center my-5 py-5'>
                  <img src={house} alt="" />
                  <h2>Portrait</h2>
                </div>
              </div>
            </Col>
            <div className='text-center mt-5'>
            <Button variant="outline-secondary" className='rounded-pill btn-change'>View All Services</Button>            
            </div>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Home;

