import CartResume from "@components/cartResume/cartResume.component";
import OrderForm from "@components/orderForm/orderForm.component";
import SubTotalCartItems from "@components/subtotalCartItems/subtotalCartItems.component";
import DropDown from "@components/ui/dropdown/dropdown.component";
import { useCart } from "@context/cartContext";
import { ICart } from "@interfaces/cart/cart.interface";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./cartList.styles.scss";

const CartList = () => {
  const cartContext = useCart();
  const cartData = cartContext.cartData;
  const addProdToCart = cartContext.addItem;
  const clearCartData = cartContext.clearCart;
  const removeCartProduct = cartContext.removeItem;
  const getIndex = cartContext.isInCart;
  const navigate = useNavigate();

  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [cartProducts, setCartProducts] = useState<ICart[]>([]);

  const options = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", options);

  useEffect(() => {
    setCartProducts(cartData);
  }, [cartData]);

  const clearCart = () => {
    clearCartData();
  };

  const hanldeDropDownChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    productIndex: number
  ) => {
    const quantitySelected = parseInt(e.target.value);
    setProductQuantity(quantitySelected);
  };

  const handleBackToShop = () => {
    navigate("/home");
  };

  const removeProduct = (productId: string) => {
    const itemIndex = getIndex(productId);
    cartProducts.splice(itemIndex, 0);
    setCartProducts([...cartProducts]);
    removeCartProduct(productId);
  };

  return (
    <div className="cart-list-main-container">
      <div className="card-list-main-left-container">
        <div className="cart-list-description-container">
          <div className="title-section">
            {cartProducts.length === 0 ? (
              <div className="empty-cart">
                <h1>Tu carrito de Amazon está vacío.</h1>
                <p>
                  Tu Carrito de Compras vive para servir. Dale propósito —
                  llénala con abarrotes, ropa, artículos para el hogar,
                  electrónicos, y más.{" "}
                  <span
                    className="return-home"
                    onClick={() => handleBackToShop()}
                  >
                    Continuar comprando.
                  </span>
                </p>
              </div>
            ) : (
              <h1>Tus artículos</h1>
            )}

            {cartProducts.length !== 0 && (
              <AiOutlineDelete onClick={clearCart} />
            )}
          </div>

          {cartProducts
            ? cartProducts.map((product, productIndex) => {
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
                            product.product?.available
                              ? "available"
                              : "unavailable"
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
                              hanldeDropDownChange={(e) =>
                                hanldeDropDownChange(e, productIndex)
                              }
                              defaultValue={product.quantity}
                            />
                          </div>
                          <div className="remove-product">
                            <p
                              onClick={() => removeProduct(product.product.id)}
                            >
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
              })
            : null}
          <SubTotalCartItems />
        </div>
        {showForm ? (
          <div className="cart-list-description-container main-order-container">
            <OrderForm showForm={showForm} />
          </div>
        ) : null}
      </div>

      {cartProducts.length !== 0 ? (
        <div className="cart-list-order-container">
          <CartResume showForm={setShowForm} />
        </div>
      ) : null}
    </div>
  );
};

export default CartList;
