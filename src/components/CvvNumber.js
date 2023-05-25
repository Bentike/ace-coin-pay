import "../styles/cvvNumber.css";
import Header from "./Header";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const CvvNumber = () => {
  return (
    <div className="cvv-wrap">
      <Header
        title="CVV Number"
        text="Enter the 3 or 4 digit number on the card"
      />
      <div className="grid-icon-div">
        <BsFillGrid3X3GapFill className="cvv-grid-icon" />
        <input className="cvv-input" type="text" placeholder="327" />
      </div>
    </div>
  );
};

export default CvvNumber;
