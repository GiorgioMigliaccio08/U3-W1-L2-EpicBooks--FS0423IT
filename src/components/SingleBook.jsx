import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    return (
      <Card className={this.state.selected ? "red-border" : ""}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={this.toggleSelected}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
