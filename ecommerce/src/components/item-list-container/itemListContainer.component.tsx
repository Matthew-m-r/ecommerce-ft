import Item from "@components/item/item.component";
import Loader from "@components/loader/loader.component";
import { IProduct } from "@interfaces/product/product.interface";
import { getProductsByCategory } from "@utils/services/firestore";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import "./itemListContainer.styles.scss";

interface ItemListContainerProps {
  categoryId?: string;
}

const ItemListContainer = ({ categoryId }: ItemListContainerProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(categoryId, setProducts, setLoading);
  }, [categoryId]);

  return (
    <div className="main-item-list-container">
      <div className="row-items-container">
        {loading ? (
          <Loader />
        ) : (
          products.map((product: IProduct, i: number) => {
            return <Item product={product} key={i} />;
          })
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
