import Navbar from "@components/navbar/navbar.component";
import { Outlet } from "react-router-dom";
import "./mainLayout.styles.scss";

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <Navbar />
      <div className="children-container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
