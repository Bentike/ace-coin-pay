import "./App.css";
import CardNumber from "./components/CardNumber";
import CvvNumber from "./components/CvvNumber";
import Expiry from "./components/Expiry";
import LogoComponent from "./components/LogoComponent";
import Password from "./components/Password";
import Pay from "./components/Pay";
import MainCard from "./components/MainCard";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  return (
    <div className="app-main">
      <AiOutlineClose className="close-btn" />
      <div className="App">
        <div className="first-content">
          <LogoComponent />
          <CardNumber />
          <CvvNumber />
          <Expiry />
          <Password />
          <Pay />
        </div>
        <div className="second-content">
          <MainCard />
        </div>
      </div>
    </div>
  );
}

export default App;
