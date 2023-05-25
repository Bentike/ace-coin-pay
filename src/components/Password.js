import Header from "./Header";
import "../styles/password.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const Password = () => {
  return (
    <div className="cvv-wrap">
      <Header title="Password" text="Enter your Dynamic pasword" />
      <div className="password-grid">
        <BsFillGrid3X3GapFill className="password-grid-icon" />
        <input
          className="password-input"
          type="password"
          placeholder="5585964940"
        />
      </div>
    </div>
  );
};

export default Password;
