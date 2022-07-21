import Item from "@components/item/item.component";
import Loader from "@components/loader/loader.component";
import { IProduct } from "@interfaces/product/product.interface";
import { useEffect, useState } from "react";
import { getProducts } from "../../utils/services/product";
import {collection, getDocs, getFirestore} from "firebase/firestore";

import "./itemListContainer.styles.scss";

interface ItemListContainerProps {
  categoryId?: string;
}

const ItemListContainer = ({ categoryId }: ItemListContainerProps) => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<Boolean>();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    // setProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) )
    getDocs(queryCollection).then(resp => setProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ) )
    .catch( err => console.log(err) )
    .finally(() => setLoading(false))
  }, [])

  // useEffect(() => {
  //   (async () => {
  //     const response: IProduct[] = await getProducts;
  //     if (categoryId) {
  //       setProducts(
  //         response.filter(
  //           (cat: IProduct) => cat.categoryId === parseInt(categoryId)
  //         )
  //       );
  //     } else {
  //       setProducts(response);
  //     }
  //   })();
  // }, [categoryId]);

  return (
    <div className="main-item-list-container">
      <div className="row-items-container">
        {products.length === 0 ? (
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
