import { ListGroupItem, Button } from "react-bootstrap";

const SingleComment = ({ singleReview, comment }) => {
  const deleteComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + singleReview,
      {
        method: "DELETE",

        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNDczYWY2ZTNkZDAwMTQ5NWU0MzAiLCJpYXQiOjE2OTgzMjUyNDUsImV4cCI6MTY5OTUzNDg0NX0.OMmxDhKSo6yOme7lvZUVcsHnVKA8W88UBvmaPHXLxoQ",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("eliminato");
        } else {
          throw new Error();
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ListGroupItem>
      {comment.rate} | {comment.comment}
      <Button onClick={deleteComment}> Elimina! </Button>
    </ListGroupItem>
  );
};

export default SingleComment;
