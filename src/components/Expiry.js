import "../styles/expiry.css";
import Header from "./Header";

const Expiry = () => {
  return (
    <div className="expiry-wrap">
      <Header
        title="Expiry Date"
        text="Enter the expiration date of the card"
      />
      <div className="expiration-input">
        <div>
          <input type="text" placeholder="09" />
        </div>
        <div>
          <p>/</p>
        </div>
        <div>
          <input type="text" placeholder="22" />
        </div>
      </div>
    </div>
  );
};

export default Expiry;
