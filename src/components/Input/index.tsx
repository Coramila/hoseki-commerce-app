import { InputHTMLAttributes } from "react";
import Styles from "./Input.module.css";

export type InputProps = {
  variant?: "primary" | "secondary";  
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  variant = "primary", 
  type = "text",
  ...props
}: InputProps) => {
  return (
      <input
        type={type}
        className={Styles[variant]}
        {...props}
      />
  );
};

export default Input;
