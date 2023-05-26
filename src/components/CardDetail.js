import CardItem from "./CardItem";
import CompanyCard from "./CompanyCard";
import { FaApple } from "react-icons/fa";
import PriceTag from "./PriceTag";
import Card from "./Card";
import "../styles/cardDetail.css";

const CardDetail = () => {
  return (
    <div className="card-detail">
      <div className="blue-line"></div>
      <Card />
      <CompanyCard item="Company" icon={<FaApple />} text="Apple" />
      <CardItem item="Order Number" value="1266201" />
      <CardItem item="Product" value="MackBook Air" />
      <CardItem item="VAT(20%)" value="$100.00" />
      <hr className="rule"/>
      <div className="left-circle"></div>
      <div className="right-circle"></div>
      <PriceTag />
    </div>
  );
};

export default CardDetail;
