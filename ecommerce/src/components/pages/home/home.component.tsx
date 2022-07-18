import ItemListContainer from "@components/item-list-container/itemListContainer.component";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./home.styles.scss";

const Home = () => {
  const { categoryId } = useParams();

  return (
    <div className="main-home-container">
      <div className="filter-section">
        <p>Filtrar por...</p>
      </div>
      <div className="item-list">
        <ItemListContainer categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Home;
