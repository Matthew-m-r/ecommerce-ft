import ItemDetail from "@components/item-detail/itemDetail.component";
import MainLayout from "@components/layouts/main-layout/mainLayout.component";
import NotFound from "@components/not-found/notFound.component";
import Cart from "@components/pages/cart-list/cartList.component";
import Home from "@components/pages/home/home.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/category/:categoryId" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
