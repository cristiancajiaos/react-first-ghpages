import { Container, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand>React First GHPages</Navbar.Brand>
      </Container>
    </Navbar>
  );
}