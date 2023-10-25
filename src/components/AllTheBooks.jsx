import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//  Importo i file json dei libbri

import fantasy from "../fantasy.json";
import history from "../history.json";
import horror from "../horror.json";
import romance from "../romance.json";
import scifi from "../scifi.json";

const Books = function () {
  return (
    <Container className="fluid">
      {/* ROW CON I LIBBRI FANTASY */}
      <Row className="row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4">
        {fantasy.map((Books, indice) => {
          if (indice < 6) {
            return (
              <Col key={indice}>
                <Card className="h-100">
                  <Card.Img variant="top" src={Books.img} className="h-75" />
                  <Card.Body>
                    <Card.Title className="text-nowrap text-truncate">
                      {Books.title}
                    </Card.Title>
                    <Card.Text className="text-nowrap text-truncate">
                      Prezzo del libbro
                      {Books.prize}
                    </Card.Text>
                    <Button variant="primary">Aggiungi al carrello!</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
      {/* ROW CON I LIBBRI HISTORY */}
      <Row className="row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4">
        {history.map((Books, indice) => {
          if (indice < 6) {
            return (
              <Col key={indice}>
                <Card className="h-100 ">
                  <Card.Img variant="top" src={Books.img} className="h-75" />
                  <Card.Body>
                    <Card.Title className="text-nowrap text-truncate">
                      {Books.title}
                    </Card.Title>
                    <Card.Text className="text-nowrap text-truncate">
                      Prezzo del libbro
                      {Books.prize}
                    </Card.Text>
                    <Button variant="primary">Aggiungi al carrello!</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>

      {/* ROW CON I LIBBRI HORROR */}
      <Row className="row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4">
        {horror.map((Books, indice) => {
          if (indice < 6) {
            return (
              <Col key={indice}>
                <Card className="h-100 ">
                  <Card.Img variant="top" src={Books.img} className="h-75" />
                  <Card.Body>
                    <Card.Title className="text-nowrap text-truncate">
                      {Books.title}
                    </Card.Title>
                    <Card.Text className="text-nowrap text-truncate">
                      Prezzo del libbro
                      {Books.prize}
                    </Card.Text>
                    <Button variant="primary">Aggiungi al carrello!</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>

      {/* ROW CON I LIBBRI ROMANCE*/}
      <Row className="row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4">
        {romance.map((Books, indice) => {
          if (indice < 6) {
            return (
              <Col key={indice}>
                <Card className="h-100 ">
                  <Card.Img variant="top" src={Books.img} className="h-75" />
                  <Card.Body>
                    <Card.Title className="text-nowrap text-truncate">
                      {Books.title}
                    </Card.Title>
                    <Card.Text className="text-nowrap text-truncate">
                      Prezzo del libbro
                      {Books.prize}
                    </Card.Text>
                    <Button variant="primary">Aggiungi al carrello!</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>

      {/* ROW CON I LIBBRI SCIFI */}
      <Row className="row-cols-lg-6 row-cols-md-3 row-cols-1 mb-4">
        {scifi.map((Books, indice) => {
          if (indice < 6) {
            return (
              <Col key={indice}>
                <Card className="h-100 ">
                  <Card.Img variant="top" src={Books.img} className="h-75" />
                  <Card.Body>
                    <Card.Title className="text-nowrap text-truncate">
                      {Books.title}
                    </Card.Title>
                    <Card.Text className="text-nowrap text-truncate">
                      Prezzo del libbro
                      {Books.prize}
                    </Card.Text>
                    <Button variant="primary">Aggiungi al carrello!</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default Books;
