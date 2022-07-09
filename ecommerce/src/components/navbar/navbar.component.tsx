import CartWidget from "@components/cart-widget/cartWidget.component";
import { NavLink } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="main-navbar-container">
      <CartWidget />
      <div className="navbar">
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
        <div className="right-side">
          <NavLink to="/home" className="nav-link">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
