import "../styles/cardItem.css"

const CardItem = ({item, value}) => {
    return(
        <div className="card-item">
           <p className="item-title">{item}</p>
           <p className="item-value">{value}</p>
        </div>
    );
}

export default CardItem;