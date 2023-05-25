import '../styles/logoComponent.css';
import logo from "../images/ace-coin-logo.png";

const LogoComponent = () => {
  return (
    <div className="logo-header">
      <div className="logo-wrap">
        <img src={logo} alt="logo" />
        <p className="logo-text">
          AceCoin<span className="pay">Pay</span>
        </p>
      </div>
      <div className="clock">
        <p className="clock-text">0</p>
        <p className="clock-text">1</p>
        <p className='dot'>:</p>
        <p className="clock-text">1</p>
        <p className="clock-text">9</p>
      </div>
    </div>
  );
};

export default LogoComponent;