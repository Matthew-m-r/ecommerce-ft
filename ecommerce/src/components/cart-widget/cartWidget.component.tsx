import "./cartWidget.styles.scss";
import brandLogo from "../../assets/images/brandLogo.png";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/home");
  }

  return (
    <div className="brand-logo" onClick={() => handleRedirect()}>
      <img src={brandLogo} />
    </div>
  );
};

export default CartWidget;
