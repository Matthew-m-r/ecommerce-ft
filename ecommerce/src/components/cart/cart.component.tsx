import { useCart } from "@context/cartContext";
import { useEffect, useState } from "react";
import cartImage from "@assets/images/Cart.png";

import "./cart.styles.scss";
import { getCartListQuantity } from "@utils/services/cart";

const Cart = () => {
  const cartContext = useCart();
  const cartData = cartContext.cartData;
  const [totalCartProducts, setTotalCartProducts] = useState<number>();
  const [animation, setAnimation] = useState<Boolean>(false);

  useEffect(() => {
    setAnimation(true);
    setTotalCartProducts(getCartListQuantity(cartData));
  }, [cartData]);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }, [totalCartProducts]);

  return (
    <div
      className={`cart-main-container ${
        animation ? "product-added-animation" : ""
      }`}
    >
      <h4>{totalCartProducts}</h4>
      <img src={cartImage} />
    </div>
  );
};

export default Cart;
