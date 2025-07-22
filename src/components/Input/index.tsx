import { CSSProperties } from "react";
import Styles from "./Input.module.css";

type InputProps = {
  variant?: "primary" | "secondary";
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: CSSProperties;
  type?: string;
};

const Input = ({
  variant = "primary",
  onChange,
  placeholder,
  id,
  style,
  type = "text",
  ...props
}: InputProps) => {
  return (
      <input
        type={type}
        className={Styles[variant]}
        style={style}
        {...props}
        onChange={() => onChange}
        id={id}
        placeholder={placeholder}
      />
  );
};

export default Input;
