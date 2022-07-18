import React from "react";
import "./button.styles.scss";

interface ButtonProps {
  text: string;
  buttonStyle: string;
  onClick?: () => void;
}

const CustomButton = ({ text, buttonStyle, onClick }: ButtonProps) => {
  return (
    <div className={`main-button-container ${buttonStyle}`} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export default CustomButton;
