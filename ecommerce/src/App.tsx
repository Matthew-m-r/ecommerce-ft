import ItemListContainer from "@components/pages/item-list-container/itemListContainer.component";
import Navbar from "@components/navbar/navbar.component";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
