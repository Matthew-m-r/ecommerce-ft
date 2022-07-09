import MainLayout from "@components/layouts/main-layout/mainLayout.component";
import Home from "@components/pages/home/home.component";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
