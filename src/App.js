import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderForMobile from "./Header";
import CardsForDemo from "./Components/CardsFordemo";
import DoctorCards from "./Components/DoctorCards";
const App = () => {
  return (
    <div className="App">
      <HeaderForMobile />
      <CardsForDemo />
      <DoctorCards />
    </div>
  );
};

export default App;
