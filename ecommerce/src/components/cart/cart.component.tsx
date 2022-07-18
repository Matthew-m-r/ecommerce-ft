import { useCart } from "@context/cartContext";
import { useEffect, useState } from "react";

import "./cart.styles.scss";

const Cart = () => {
  const cartContext = useCart();
  const cartData = cartContext.cartData;
  const [totalCartProducts, setTotalCartProducts] = useState<number>();

  useEffect(() => {
    const allProducts =
      cartData.length !== 0
        ? cartData.map((prod) => prod.quantity).reduce((a, b) => a + b)
        : 0;
    setTotalCartProducts(allProducts);
  }, [cartData]);

  return (
    <div className="cart-main-container">
      <h4>{totalCartProducts}</h4>
      <img src={"/src/assets/images/Cart.png"} alt="" />
    </div>
  );
};

export default Cart;
