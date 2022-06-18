import CartWidget from "@components/cart-widget/cartWidget.component";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="main-navbar-container">
      <CartWidget />
      <div className="navbar">
        <div className="left-side">
          <p>Inicio</p>
          <p>Series TV</p>
          <p>Películas</p>
          <p>Novedades más vistas</p>
          <p>Mi lista</p>
        </div>
        <div className="right-side">
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
