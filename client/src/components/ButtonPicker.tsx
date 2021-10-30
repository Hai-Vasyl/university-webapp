import React from "react";
import { Languages } from "../redux/configs/configsTypes";
// @ts-ignore
import styles from "../styles/button.module";

interface IButtonPickerProps {
  field: Languages;
  options: {
    value: string;
    label: string;
  }[];
  change: any;
  exClass?: string;
}

const ButtonPicker: React.FC<IButtonPickerProps> = ({
  field,
  options,
  change,
  exClass,
}) => {
  const optionsJSX = options.map((option) => {
    return (
      <option
        key={option.value}
        className={styles.btn_option}
        value={option.value}
      >
        {option.label}
      </option>
    );
  });
  return (
    <select
      onChange={change}
      value={field}
      className={`${styles.btn_tab} ${exClass}`}
    >
      {optionsJSX}
    </select>
  );
};

export default ButtonPicker;
