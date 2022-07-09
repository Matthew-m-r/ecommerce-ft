import ItemDetail from "@components/item-detail/itemDetail.component";
import MainLayout from "@components/layouts/main-layout/mainLayout.component";
import Home from "@components/pages/home/home.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/category/:categoryId" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
