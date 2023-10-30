import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import CommentArea from "./CommentArea"

class BookList extends Component {
  state = {
    searchValue: "",
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Cerca un libro..."
                value={this.state.searchValue}
                onChange={(e) => {
                  this.setState({
                    searchValue: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.manyBooks
            .filter((oneBook) =>
              oneBook.title
                .toLowerCase()
                .includes(this.state.searchValue.toLowerCase())
            )
            .map((oneBook) => {
              return (
                <Col md={3} key={oneBook.asin}>
                  <SingleBook book={oneBook} />
                </Col>
              );
            })}
        </Row>
        <Col> <CommentArea/> </Col>
      </Container>
    );
  }
}

export default BookList;
