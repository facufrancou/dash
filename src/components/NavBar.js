import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from "../assets/logoTL.svg";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        
            <Link to="/home">
              <Nav.Link href="#home">
                <div className='img-login' id='img-nav'>
                  <img src={image1} alt="Logo Techlogic.store"/>
                </div>
              </Nav.Link>
            </Link>
            <Nav className="me-auto">
              <Link to="/home"><Nav.Link href="#home">Home</Nav.Link></Link>
              <Link to="/products"><Nav.Link href="#products">Productos</Nav.Link></Link>
              <Link to="/users"><Nav.Link href="#users">Usuarios</Nav.Link></Link>   
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;