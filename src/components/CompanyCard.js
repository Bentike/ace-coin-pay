import "../styles/companyCard.css";

const CompanyCard = ({ item, icon, text }) => {
  return (
    <div className="card-item">
      <p className="item-title">{item}</p>
      <div className="company-icon-wrap">
        <p className="apple-icon">{icon}</p>
        <p className="item-value">{text}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
