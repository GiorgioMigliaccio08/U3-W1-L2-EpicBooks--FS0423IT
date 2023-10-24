import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//  Importo i file json dei libbri

import fantasy from "../fantasy.json";
// import history from "../src/history.json";
// import horror from "../src/horror.json";
// import romance from "../src/romance.json";
// import scifi from "../src/scifi.json";

const Books = function () {
  return (
    <Container>
      <Row className="row-cols-lg-6">
        {fantasy.map((Books, indice) => {
          return (
            <Col key={indice}>
              <Card className="h-100">
                <Card.Img variant="top" src={Books.img} />
                <Card.Body>
                  <Card.Title>{Books.title}</Card.Title>
                  <Card.Text>
                    Prezzo del libbro
                    {Books.prize}
                  </Card.Text>
                  <Button variant="primary">Aggiungi al carrello!</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Books;
