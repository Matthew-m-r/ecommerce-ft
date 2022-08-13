import { useCart } from "@context/cartContext";
import { getCartListQuantity, getTotalCharge } from "@utils/services/cart";
import React, { useEffect, useState } from "react";
import "./subtotalCartItems.styles.scss";

const SubTotalCartItems = () => {
  const cartContext = useCart();
  const cartData = cartContext.cartData;
  const [totalCartProducts, setTotalCartProducts] = useState<number>(0);
  const [totalCharge, setTotalCharge] = useState<number>(0);

  const options = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", options);

  useEffect(() => {
    setTotalCartProducts(getCartListQuantity(cartData));
    setTotalCharge(getTotalCharge(cartData));
  }, [cartData]);

  return (
    <div className="subtotal-cart-items-container">
      <p>Subtotal ({totalCartProducts} producto{totalCartProducts > 1 ? "s" : ""}): <span>US{priceFormat.format(totalCharge)}</span></p>
    </div>
  );
};

export default SubTotalCartItems;
