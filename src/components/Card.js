import MasterCardTextImage from "../images/mst.webp";
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
      <p className="holder-name">Jonathan Micheal</p>
      <div className="hash-div">
        <p className="hash">....</p>
        <p className="pin">3456</p>
      </div>
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
