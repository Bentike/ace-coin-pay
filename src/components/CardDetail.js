import CardItem from "./CardItem";
import CompanyCard from "./CompanyCard";
import { FaApple } from 'react-icons/fa';
import "../styles/cardDetail.css";
import PriceTag from "./PriceTag";
const CardDetail = () => {

    return (
        <div className="card-detail">
            <CompanyCard item="Company" icon={<FaApple/>} text="Apple"/>
            <CardItem item="Order Number" value="1266201"/>
            <CardItem item="Product" value="MackBook Air"/>
            <CardItem item="VAT(20%)" value="$100.00"/>
            <hr/>
            <PriceTag/>
        </div>
    );
}

export default CardDetail;