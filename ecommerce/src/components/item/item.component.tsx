import { IProduct } from "@interfaces/product/product.interface";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./item.styles.scss";

interface ItemProps {
  product: IProduct;
}

const Item = ({ product }: ItemProps) => {
  const options = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", options);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div className="main-item-container" onClick={handleRedirect}>
      <div className="product-image">
        <img src={product.pictureUrl} />
      </div>
      <div className="product-description">
        <div className="title">
          <h6>{product.title}</h6>
        </div>
        <div className="rating"></div>
        <div className="price">
          <p>{priceFormat.format(product.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
