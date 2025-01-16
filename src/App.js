import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbardec from "./navbar";
import CarouselPage from "./Carousal";
import Accordian from "./Accordian";
import UncontrolledExample from "./Tab";

function App() {
  return (
    <div className="App">
      <Navbardec />
      <CarouselPage />
      <Accordian />
      <UncontrolledExample />
    </div>
  );
}

export default App;
