import MasterCardTextImage from "../images/mastercart-text.png";
import sim from "../images/sim.png";
import wifi from "../images/wifi.png";
import "../styles/card.css";

const Card = () => {
  return (
    <div className="card-component">
      <div className="icon-wrap">
        <img src={sim} alt="sim card" />
        <img src={wifi} alt="wifi icon" />
      </div>
      <p>John Micheal</p>
      <p>.... 3456</p>
      <div className="card-date-wrap">
        <div>09/22</div>
        <div>
          <img src={MasterCardTextImage} alt="master card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
