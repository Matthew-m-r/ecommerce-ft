import DropDown from "@components/ui/button/dropdown/dropdown.component";
import { useCart } from "@context/cartContext";
import { ICart } from "@interfaces/cart/cart.interface";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./cartList.styles.scss";

const CartList = () => {
  const cartContext = useCart();
  const cartData = cartContext.cartData;
  const clearCartData = cartContext.clear;
  const removeCartProduct = cartContext.removeItem;
  const getIndex = cartContext.isInCart;

  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [cartProducts, setCartProducts] = useState<ICart[]>([]);

  const options = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", options);

  useEffect(() => {
    setCartProducts(cartData);
  }, [cartData]);

  const clearCart = () => {
    clearCartData();
  };

  const hanldeDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductQuantity(parseInt(e.target.value));
  };

  const removeProduct = (productId: number) => {
    const index = getIndex(productId);
    cartProducts.splice(index, 0);
    console.log("cartProducts ->>>>  ", cartProducts, "  index  ", index);
    setCartProducts([...cartProducts]);
    removeCartProduct(productId);
  };

  return (
    <div className="cart-list-main-container">
      <div className="title-section">
        <h2>
          {cartProducts.length === 0
            ? "Tu carrito de Amazon está vacío."
            : "Carrito"}
        </h2>
        {cartProducts.length === 0 && <p>Subtotal (0 productos):</p>}
        {cartProducts.length !== 0 && <AiOutlineDelete onClick={clearCart} />}
      </div>

      {cartProducts &&
        cartProducts.map((product) => {
          return (
            <div className="cart-product-description">
              <div className="image-block">
                <img src={product.product.pictureUrl} />
              </div>
              <div className="description-block">
                <div className="product-title-section">
                  <p>{product.product.title}</p>
                </div>
                <div className="product-actions-section">
                  <p
                    className={`${
                      product.product?.available ? "available" : "unavailable"
                    }`}
                  >
                    Disponible.
                  </p>
                  <div className="product-state-section">
                    <p>Envío Gratis a Colombia.</p>
                  </div>
                  <div className="actions-section">
                    <div className="quantity-section">
                      <DropDown
                        name={"Cantidad"}
                        value={product.product?.stock}
                        hanldeDropDownChange={hanldeDropDownChange}
                        defaultValue={product.quantity}
                      />
                    </div>
                    <div className="remove-product">
                      <p onClick={() => removeProduct(product.product.id)}>
                        Eliminar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-block">
                <h5>USD{priceFormat.format(product.product.price)}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartList;
