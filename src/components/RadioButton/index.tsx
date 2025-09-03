import React from "react";
import styles from "./RadioButton.module.css";

type RadioButtonProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <label className={styles.radioContainer}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={handleChange}
        className={styles.radioInput}
      />
      <span className={styles.customRadio}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default RadioButton;