import { IProduct } from "@interfaces/product/product.interface";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  getFirestore,
} from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";
import { db } from "../../../src/firebase/firebase";

export const getProductsByCategory = (
  categoryId: string | undefined,
  setProducts: Dispatch<SetStateAction<IProduct[]>>,
  setLoading: Dispatch<SetStateAction<Boolean>>
) => {
  const queryCollection = collection(db, "products");
  const queryCollectionFiltered = categoryId
    ? query(queryCollection, where("categoryId", "==", parseInt(categoryId)))
    : queryCollection;

  getDocs(queryCollectionFiltered)
    .then((resp) =>
      setProducts(
        resp.docs.map((prod) => ({ id: prod.id, ...prod.data() } as IProduct))
      )
    )
    .catch((err) => {})
    .finally(() => setLoading(false));
};

export const getProductById = (productId: string, setProduct: Dispatch<SetStateAction<IProduct>>) => {
  const product = doc(db, 'products', productId);
  
  getDoc(product)
    .then((doc) => {
      setProduct({ id: doc.id, ...doc.data() } as IProduct);
    })
    .catch((err) => err);
};

export const createOrder = (order: any, setOrderId: any, cleanCart: any) => {
  const orderRef = collection(db, "orders");
  addDoc(orderRef, order).then((doc) => {
    setOrderId(doc.id);
  });
  cleanCart();
};

export const getFirebase = (order: any, setOrderId: number) => {};
