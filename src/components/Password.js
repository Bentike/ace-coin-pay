import Header from "./Header";
import "../styles/password.css";

const Password = () => {
  return (
    <div className="cvv-wrap">
     <Header title="Password" text="Enter your Dynamic pasword"/>
      <div>
        <input className="password-input" type="password" placeholder="5585964940" />
      </div>
    </div>
  );
};

export default Password;