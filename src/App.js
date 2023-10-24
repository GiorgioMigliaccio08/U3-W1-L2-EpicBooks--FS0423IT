import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importo la mia NavBar
import CustomNavbar from "./components/MyNav";
// Importo il mio Footer
import MyFooter from "./components/MyFooter";
// Importo il mio Welcome
import Welcome from "./components/Welcome";
// Importo i miei libbri
import Books from "./components/AllTheBooks";

//  Importo i file json dei libbri

import fantasy from "../src/fantasy.json";
import history from "../src/history.json";
import horror from "../src/horror.json";
import romance from "../src/romance.json";
import scifi from "../src/scifi.json";

function App() {
  return (
    <div>
      <CustomNavbar additionalText="I migliori libbri del web!" />
      <Welcome />
      <Books />
      <MyFooter />
    </div>
  );
}

export default App;
