import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/proyecto4/'>Kapodipelo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/proyecto4/">Home</Nav.Link>
            <Nav.Link as={Link} to="/proyecto4/about" >Sobre nosotros</Nav.Link>
            <Nav.Link as={Link} to="/proyecto4/products">Productos</Nav.Link>
            <Nav.Link as={Link} to="/proyecto4/agenda">Reserva de hora</Nav.Link>
            <Nav.Link as={Link} to="/proyecto4/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
