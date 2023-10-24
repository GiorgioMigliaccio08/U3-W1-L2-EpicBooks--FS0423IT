import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importo la mia NavBar
import CustomNavbar from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <CustomNavbar additionalText="I migliori libbri del web!" />
      <Welcome />
      <MyFooter />
    </div>
  );
}

export default App;
