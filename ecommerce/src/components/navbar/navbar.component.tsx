import CartWidget from "@components/cart-widget/cartWidget.component";
import Cart from "@components/cart/cart.component";
import SearchField from "@components/search-field/searchField.component";
import { Link, NavLink } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="main-navbar-container">
      <div className="navbar">
        <div className="nav-top-container">
          <div className="nav-left">
            <CartWidget />
          </div>
          <div className="nav-fill">
            <SearchField />
          </div>
          <div className="nav-right">
            <NavLink to="/cart" className="cart-link">
              <Cart />
            </NavLink>
          </div>
        </div>
        <div className="nav-bottom-container">
          <div className="left-side">
            <NavLink to="/home" className="nav-link">
              Ofertas del día
            </NavLink>
            <NavLink to="/home/category/1" className="nav-link">
              Tecnología
            </NavLink>
            <NavLink to="/home/category/2" className="nav-link">
              Deporte
            </NavLink>
            <NavLink to="/home/category/3" className="nav-link">
              Series
            </NavLink>
            <NavLink to="/home/category/4" className="nav-link">
              Mascotas
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
