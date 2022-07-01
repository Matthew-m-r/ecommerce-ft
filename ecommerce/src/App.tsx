import MainLayout from "@components/layouts/main-layout/mainLayout.component";
import Home from "@components/pages/home/home.component";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
