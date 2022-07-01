import Navbar from "@components/navbar/navbar.component";
import React from "react";
import "./mainLayout.styles.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout-container">
      <Navbar />
      <div className="children-container">{children}</div>
    </div>
  );
};

export default MainLayout;
