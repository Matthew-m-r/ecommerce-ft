import SubTotalCartItems from "@components/subtotalCartItems/subtotalCartItems.component";
import CustomButton from "@components/ui/button/button.component";
import React, { Dispatch, SetStateAction } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "./cartResume.styles.scss";

interface CartResumeProps {
  freeShipping?: Boolean;
  showForm: Dispatch<SetStateAction<Boolean>>
}

const CartResume = ({ freeShipping = true, showForm }: CartResumeProps) => {
  return (
    <div className="cart-resume-main-container">
      <div className="shipping-details-container">
        <BsCheckCircleFill />
        <p>
          ¡Tu pedido es elegible para <span>envío GRATIS.</span> Detalles
        </p>
      </div>
      <div className="subtotal-section">
        <SubTotalCartItems />
      </div>
      <div className="order-section">
        <CustomButton
          text="Proceder al pago"
          buttonStyle="yellow"
          onClick={() => showForm(true)}
        />
      </div>
    </div>
  );
};

export default CartResume;
