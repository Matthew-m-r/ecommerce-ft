import { ICart } from "@interfaces/cart/cart.interface";
import { IOrder, orderInitialState } from "@interfaces/order/order.interface";
import { db } from "../../../src/firebase/firebase";

import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";
import { getTotalCharge } from "./cart";
import { IForm } from "@interfaces/form/form.interface";

export const createOrder = async (
  cartContext: any,
  setOrderCode: Dispatch<SetStateAction<string>>,
  form: IForm
) => {
  const cartData = cartContext.cartData;
  let orderCreated: string = "";

  const order: IOrder = orderInitialState;
  order.buyer = { ...form };
  order.products = cartData.map((prod: ICart, i: number) => {
    const id = prod.product.id;
    return id;
  });

  order.totalCharge = getTotalCharge(cartData);

  // Add a new order
  const queryInsertCollection = collection(db, "orders");
  addDoc(queryInsertCollection, order)
    .then((resp) => {
      setOrderCode(resp.id);
    })
    .catch((err) => {})
    .finally(() => {
      cartContext.clearCart();
    });

  // Update multiple products stock
  const queryCollectionStock = collection(db, "products");

  const queryUpdateStock = query(
    queryCollectionStock,
    where(
      documentId(),
      "in",
      cartData.map((prod: ICart) => prod.product.id)
    )
  );

  const batch = writeBatch(db);

  await getDocs(queryUpdateStock)
    .then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock -
            cartData.find((prod: ICart) => prod.product.id === res.id).quantity,
        })
      )
    )
    .catch((err) => {})
    .finally(() => console.log("stock actualizado!"));

  batch.commit();

  return orderCreated;
};
