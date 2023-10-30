import CommentList from "./CommentList";
import AddComment from "./AddComment";

import { col, Container, Row } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  getComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookId,
        {
          headers: {
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmY2E1MmIzOTczNDAwMTRkNWU4YWEiLCJpYXQiOjE2OTg2NzkzNzgsImV4cCI6MTY5OTg4ODk3OH0.CpKHHQjws_-p72np_BCFPrAyPYZVffy1j0od114G-hc"
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log("data", data);

        this.setState({
          comments: data,
        });
      } else {
        throw new Error("Fetch non conclusa");
      }
    } catch (error) {
      console.log("errore nel caricamento dei commenti", error);
    }
  };
}
