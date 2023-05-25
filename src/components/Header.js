import "../styles/header.css";

const Header = ({title, text}) => {
  return (
    <div>
      <p className="header-title">{title}</p>
      <p className="header-text">{text}</p>
    </div>
  );
};

export default Header;