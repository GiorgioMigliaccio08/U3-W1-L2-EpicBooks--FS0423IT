import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = ({ book, changeAsin, selectedAsin }) => {
  // ogni SingleBook riceve this.props.selectedAsin, ovvero l'asin del libro corrente selezionato
  // per fare in modo che solo UN SingleBook riceva il bordo rosso, dobbiamo comparare il proprio asin
  // con il selectedAsin.
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Card
        onClick={() => {
          setSelected(!selected);
          changeAsin(book.asin);
        }}
        // style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        style={{
          border: book.asin === selectedAsin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea bookId={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
