import ItemListContainer from "@components/item-list-container/itemListContainer.component";
import { useParams } from "react-router-dom";
import { categories} from "@mocks/categories";
import "./home.styles.scss";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<string>();
  const { categoryId } = useParams();
  
  useEffect(() => {
    setCurrentCategory(categories.find(cat => cat.id === categoryId)?.name);
  }, [categoryId])
  

  return (
    <div className="main-home-container">
      <div className="filter-section">
        <h1>{!currentCategory ? "Ofertas del día" : currentCategory}</h1>
      </div>
      <div className="item-list">
        <ItemListContainer categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Home;
