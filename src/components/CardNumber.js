import "../styles/cardNumber.css";
import { MdModeEdit } from 'react-icons/md';
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
          <MdModeEdit/>
          <p className="edit-text">Edit</p>
        </div>
      </div>
      <input
        className="card-input"
        type="text"
        placeholder="2344 - 3454 - 5464 - 5364"
      />
    </div>
  );
};

export default CardNumber;
