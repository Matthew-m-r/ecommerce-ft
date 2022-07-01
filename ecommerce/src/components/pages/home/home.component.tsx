import ItemListContainer from "@components/item-list-container/itemListContainer.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="main-home-container">
      <div className="filter-section">
        <p>Filtrar por...</p>
      </div>
      <div className="item-list">
        <ItemListContainer />
      </div>
    </div>
  );
};

export default Home;
