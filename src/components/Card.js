import MasterCardTextImage from "../images/mastercart-text.png";
import sim from "../images/sim.png";
import wifi from "../images/wifi.png";
import { HiWifi } from 'react-icons/hi';
import { BsSim } from 'react-icons/bs';
import "../styles/card.css";

const Card = () => {
  return (
    <div className="card-component">
      <div className="icon-wrap">
        <BsSim/>
        <HiWifi/>
      </div>
      <p>John Micheal</p>
      <p className="pin"><span className="hash">....</span>3456</p>
      <div className="card-date-wrap">
        <div className="card-date">09/22</div>
        <div>
          <img className="master-card" src={MasterCardTextImage} alt="master card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
