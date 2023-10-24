import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importo la mia NavBar
import CustomNavbar from "./components/MyNav";

function App() {
  return (
    <div>
      <CustomNavbar additionalText="I migliori libbri del web!" />
    </div>
  );
}

export default App;
