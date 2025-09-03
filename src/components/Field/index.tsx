import { MouseEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import styles from "./Field.module.css";

type FieldProps = {
  label: string;
  inputId: string;
  inputPlaceholder: string;
  buttonText?: string;
  onButtonClick: (e: MouseEvent<HTMLElement>) => void;
  onChange: () => void;
};

const Field = ({
  label,
  inputId,
  inputPlaceholder,
  buttonText,
  onButtonClick,
  onChange,
}: FieldProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={inputId}>{label}</label>
      <div className={styles.inputFieldContainer}>
        <div style={{ width: "90%" }}>
          <Input
            id={inputId}
            placeholder={inputPlaceholder}
            onChange={() => onChange}
          />
        </div>
        {!!buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
      </div>
    </div>
  );
};

export default Field;