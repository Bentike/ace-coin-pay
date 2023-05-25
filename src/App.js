import "./App.css";
import CardNumber from "./components/CardNumber";
import CvvNumber from "./components/CvvNumber";
import Expiry from "./components/Expiry";
import LogoComponent from "./components/LogoComponent";
import Password from "./components/Password";
import Pay from "./components/Pay";

function App() {
  return (
    <div className="App">
      <div>
        <LogoComponent/>
        <CardNumber/>
        <CvvNumber/>
        <Expiry/>
        <Password/>
        <Pay/>
      </div>
      <div>
        Here
      </div>
    </div>
  );
}

export default App;
