import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Importo la mia NavBar
import CustomNavbar from "./components/MyNav";
// Importo il mio Footer
import MyFooter from "./components/MyFooter";
// Importo il mio Welcome
import Welcome from "./components/Welcome";
// Importo i miei libbri
// import Books from "./components/AllTheBooks";

// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasy.json";

function App() {
  return (
    <Container>
      <CustomNavbar additionalText="I migliori libbri del web!" />
      <Welcome />
      {/* <Books /> */}
      {/* <SingleBook book={fantasyBooks[0]} /> */}
      <BookList manyBooks={fantasyBooks} />
      <MyFooter />
    </Container>
  );
}

export default App;
