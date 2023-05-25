import "../styles/cvvNumber.css";
import Header from "./Header";

const CvvNumber = () => {
  return (
    <div className="cvv-wrap">
      <Header
        title="CVV Number"
        text="Enter the 3 or 4 digit number on the card"
      />
      <div>
        <input type="text" placeholder="327" />
      </div>
    </div>
  );
};

export default CvvNumber;
