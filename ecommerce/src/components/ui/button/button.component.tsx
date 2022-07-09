import React from "react";
import "./button.styles.scss";

interface ButtonProps {
  text: string;
  buttonStyle: string;
}

const CustomButton = ({ text, buttonStyle }: ButtonProps) => {
  return (
    <div className={`main-button-container ${buttonStyle}`}>
      <p>{text}</p>
    </div>
  );
};

export default CustomButton;
