import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.reviews.map((review) => {
        return (
          <SingleComment
            singleReview={review.elementId}
            key={review._id}
            comment={review}
          />
        );
      })}
    </ListGroup>
  );
};

export default CommentsList;
