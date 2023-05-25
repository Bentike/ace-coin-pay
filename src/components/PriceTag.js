import "../styles/priceTag.css";
import Tag from "../images/tag.png";

const PriceTag = () => {
  return (
    <div className="price-tag-wrap">
      <div>
        <p className="price-description">You have to Pay</p>
        <p className="price">
          549
          <span className="sub">
            .99 <span className="usd">USD</span>
          </span>
        </p>
      </div>
      <div>
        <img className="tag-img" src={Tag} alt="price tag" />
      </div>
    </div>
  );
};

export default PriceTag;
