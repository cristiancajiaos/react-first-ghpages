import { Container } from "react-bootstrap";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

export const Footer = () => {
  return (
    <>
      <footer>
        <Container fluid>
          <hr/>
          &#169; CCS, {currentYear}
        </Container>
      </footer>
    </>
  );
}