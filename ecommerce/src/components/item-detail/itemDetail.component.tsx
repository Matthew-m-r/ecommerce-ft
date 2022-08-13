import CustomButton from "@components/ui/button/button.component";
import DropDown from "@components/ui/dropdown/dropdown.component";
import { useCart } from "@context/cartContext";
import { IProduct, productInitialState } from "@interfaces/product/product.interface";
import { getProductById } from "@utils/services/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./itemDetail.styles.scss";

const ItemDetail = () => {
  const [product, setProduct] = useState<IProduct>(productInitialState);
  const options = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", options);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const navigate = useNavigate();
  const cartContext = useCart();
  const addProduct = cartContext.addItem;
  const { id } = useParams();

  useEffect(() => {
    const productId = id ? id.toString() : '';
    getProductById(productId, setProduct);
  }, [id]);

  const hanldeDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    addProduct({ product, quantity: productQuantity });
  };

  const goToPurchase = () => {
    addProduct({ product, quantity: productQuantity });
    navigate("/cart");
  };

  return (
    <div className="main-product-detail-container">
      <div className="product-preview-container">
        <div className="product-preview">
          <div className="product-image-container">
            <img src={product?.pictureUrl} />
          </div>
          <p>{product?.title}</p>
        </div>
      </div>
      <div className="product-details-container">
        <p>{product?.title}</p>
        <div className="product-title-container">
          <p>USD{product && priceFormat.format(product.price)}</p>
          <p className="product-long-description">{product?.description}</p>
        </div>
        <div className="price-description-container"></div>
      </div>
      <div className="cart-details-container">
        <p>USD{product && priceFormat.format(product.price)}</p>
        <p className="shipping-details-container">
          Sin depósito de derechos de importación y US$12.31 de envío a Colombia
          Detalles Entrega el Martes, Julio 19. Realiza el pedido en 18 hrs 15
          mins
        </p>
        <p className={`${product?.available ? "available" : "unavailable"}`}>
          Disponible.
        </p>
        <DropDown
          name={"Cantidad"}
          value={product?.stock}
          hanldeDropDownChange={hanldeDropDownChange}
        />
        <div className="buttons-section">
          <CustomButton
            text="Agregar al carrito"
            buttonStyle="yellow"
            onClick={addToCart}
          />
          <CustomButton
            onClick={goToPurchase}
            text="Comprar ahora"
            buttonStyle="orange"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
