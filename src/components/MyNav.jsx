import { Container, Navbar, Nav } from "react-bootstrap";

const CustomNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          Epicbooks - {props.additionalText}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">BROWSE</Nav.Link>
            <Nav.Link href="#pricing">SEARCH BOOK</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
