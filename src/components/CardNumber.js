import "../styles/cardNumber.css";
import edit from "../images/edit.png";
import Header from "./Header";

const CardNumber = () => {
  return (
    <div>
      <div className="card-wrap">
        <Header
          title="Card Number"
          text="Enter the 16-digit card number on the card"
        />
        <div className="edit-wrap">
          <img src={edit} alt="edit-icon" />
          <p>Edit</p>
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
