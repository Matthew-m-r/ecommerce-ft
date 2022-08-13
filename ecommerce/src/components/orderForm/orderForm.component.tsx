import CustomButton from "@components/ui/button/button.component";
import Input from "@components/ui/input/input.component";
import { useCart } from "@context/cartContext";
import {
  IForm,
  initialFormErrorState,
  initialFormState,
} from "@interfaces/form/form.interface";
import { defaultValidation, emailValidation } from "@utils/services/form";
import { createOrder } from "@utils/services/order";
import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { formData } from "./form.data";
import "./orderForm.styles.scss";

interface OrderFormProps {
  showForm: Boolean;
}

const OrderForm = ({ showForm }: OrderFormProps) => {
  const [form, setForm] = useState<IForm>(initialFormState);
  const [formError, setFormError] = useState<IForm>(initialFormErrorState);
  const [orderCode, setOrderCode] = useState<string>("");
  const cartContext = useCart();
  const navigate = useNavigate();

  const HandleReturnHome = () => {
    setOrderCode("");
    navigate("/");
  };

  const OnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validatedEmail = emailValidation(form.email.trim());
    if (validatedEmail !== "") {
      return setFormError({
        ...initialFormErrorState(),
        email: validatedEmail,
      });
    }

    createOrder(cartContext, setOrderCode, form);
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return showForm && orderCode === "" ? (
    <form
      onSubmit={(event) => OnSubmit(event)}
      className={`main-order-form-container ${
        showForm ? "show-order-container" : ""
      }`}
    >
      <h2>Datos de facturación</h2>

      <div className="client-billing-data">
        {formData.map((formInput, index) => {
          return (
            <div className="billing-block">
              <label htmlFor="name">{formInput.label}</label>
              <Input
                maxLength={formInput.maxlength}
                placeHolder={formInput.placeHolder}
                type={formInput.inputType}
                name={formInput.name}
                onChange={OnChange}
              />
              {formInput.name === "email" ? (
                <p className="error-message">{formError.email}</p>
              ) : null}
            </div>
          );
        })}
        <CustomButton
          text="Finalizar compra"
          buttonStyle="yellow"
          type="submit"
        />
      </div>
    </form>
  ) : (
    <div className="order-created">
      <div className="confirmation-section">
        <BsCheckCircleFill />
        <div className="success-message">
          <h1>¡Compra realizada con éxito!</h1>
        </div>
      </div>

      <div className="order-tracking-code">
        <p>¡Hemos recibido tu orden de compra con éxito!</p>
        <p>El código de seguimiento de tu orden es: <strong>{orderCode}</strong></p>
        <CustomButton
          text="Seguir comprando"
          buttonStyle="yellow"
          onClick={HandleReturnHome}
        />
      </div>
    </div>
  );
};

export default OrderForm;
