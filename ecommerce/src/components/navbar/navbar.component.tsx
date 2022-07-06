import CartWidget from "@components/cart-widget/cartWidget.component";
import { NavLink } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="main-navbar-container">
      <CartWidget />
      <div className="navbar">
        <div className="left-side">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/">Series TV</NavLink>
          <NavLink to="/">Películas</NavLink>
          <NavLink to="/">Novedades más vistas</NavLink>
          <NavLink to="/">Mi lista</NavLink>
        </div>
        <div className="right-side">
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
