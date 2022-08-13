import React from "react";
import "./input.styles.scss";

interface InputProps {
  maxLength: number;
  placeHolder: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ maxLength, placeHolder, type, name, onChange }: InputProps) => {
  return (
    <input
      className="custom-input"
      type={type}
      placeholder={placeHolder}
      maxLength={maxLength}
      name={name}
      onChange={onChange}
      required
    />
  );
};

export default Input;
