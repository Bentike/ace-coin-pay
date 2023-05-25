import "./App.css";
import CardNumber from "./components/CardNumber";
import CvvNumber from "./components/CvvNumber";
import Expiry from "./components/Expiry";
import LogoComponent from "./components/LogoComponent";
import Password from "./components/Password";
import Pay from "./components/Pay";
import MainCard from "./components/MainCard";
import { AiOutlineClose } from 'react-icons/ai';


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
        <MainCard/>
      </div>
    </div>
  );
}

export default App;
