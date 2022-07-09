import CustomButton from "@components/ui/button/button.component";
import { IProduct } from "@interfaces/product/product.interface";
import { getProducts } from "@utils/services/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetail.styles.scss";

const ItemDetail = () => {
  const [product, setProduct] = useState<IProduct>();
  const options = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", options);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response: IProduct[] = await getProducts;
      if (id) {
        setProduct(response.find((prod) => prod.id === parseInt(id)));
      }
    })();
  }, [id]);

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
        <div className="buttons-section">
          <CustomButton text="Agregar al carrito" buttonStyle="yellow" />
          <CustomButton text="Comprar ahora" buttonStyle="orange" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
