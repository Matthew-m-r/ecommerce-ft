import { useCart } from "@context/cartContext";
import { useEffect, useState } from "react";
import cartImage from "@assets/images/Cart.png";

import "./cart.styles.scss";
import { getCartListQuantity } from "@utils/services/cart";

const Cart = () => {
  const cartContext = useCart();
  const cartData = cartContext.cartData;
  const [totalCartProducts, setTotalCartProducts] = useState<number>();
  
  useEffect(() => {
    setTotalCartProducts(getCartListQuantity(cartData));
  }, [cartData]);

  return (
    <div className="cart-main-container">
      <h4>{totalCartProducts}</h4>
      <img src={cartImage} />
    </div>
  );
};

export default Cart;
