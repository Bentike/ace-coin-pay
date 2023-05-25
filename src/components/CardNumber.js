import "../styles/cardNumber.css";
import { MdModeEdit } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import mCard from "../images/mcard.jfif";
import Header from "./Header";

const CardNumber = () => {
  return (
    <div className="card-number">
      <div className="card-wrap">
        <Header
          title="Card Number"
          text="Enter the 16-digit card number on the card"
        />
        <div className="edit-wrap">
          <MdModeEdit />
          <p className="edit-text">Edit</p>
        </div>
      </div>

      <div className="master-input">
        <img className="m-card" src={mCard} alt="master card" />
        <BsFillPatchCheckFill className="mark" />
        <input
          className="card-input"
          type="text"
          placeholder="2344 - 3454 - 5464 - 5364"
        />
      </div>
    </div>
  );
};

export default CardNumber;
