import CartWidget from "@components/cart-widget/cartWidget.component";
import { NavLink } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="main-navbar-container">
      <CartWidget />
      <div className="navbar">
        <div className="left-side">
          <NavLink to="/home" className="nav-link">Ofertas del día</NavLink>
          <NavLink to="/" className="nav-link">Tecnología</NavLink>
          <NavLink to="/" className="nav-link">Deporte</NavLink>
          <NavLink to="/" className="nav-link">Series</NavLink>
          <NavLink to="/" className="nav-link">Mascotas</NavLink>
        </div>
        <div className="right-side">
          <NavLink to="/home" className="nav-link">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
