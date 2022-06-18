import "./cartWidget.styles.scss";
import brandLogo from "../../assets/images/brandLogo.png";

const CartWidget = () => {
  return (
    <div className="brand-logo">
      <img src={brandLogo} />
    </div>
  );
};

export default CartWidget;
