import React from "react";
import "./button.styles.scss";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  buttonStyle: string;
  onClick?: () => void;
}

const CustomButton = ({
  text,
  type = "button",
  buttonStyle,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`main-button-container ${buttonStyle}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};

export default CustomButton;
