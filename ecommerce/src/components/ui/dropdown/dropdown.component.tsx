import React, { useEffect, useState } from "react";
import "./dropdown.styles.scss";

interface DropDownProps {
  name: string;
  value?: number;
  hanldeDropDownChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: number;
}

const DropDown = ({
  name,
  value = 1,
  hanldeDropDownChange,
  defaultValue = 1,
}: DropDownProps) => {
  const [options, setOptions] = useState<number[]>();

  useEffect(() => {
    let newOptions = [];
    for (let index = 1; index < value; index++) {
      newOptions.push(index);
    }
    setOptions(newOptions);
  }, [value]);

  return (
    <div className="dropdown-main-container">
      <label htmlFor="quantity" className="amazon-label">
        Cantidad:
      </label>
      <select
        name={"quantity"}
        id={"quantity"}
        className="amazon-dropdown"
        onChange={hanldeDropDownChange}
      >
        {options?.map((opt, i) => {
          return (
            <option value={opt} key={i} selected={opt === defaultValue}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
