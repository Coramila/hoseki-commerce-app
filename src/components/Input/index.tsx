import { CSSProperties, ReactNode } from "react";
import Styles from "./Input.module.css";

type InputProps = {
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: CSSProperties;
  type?: string;
};

const Input = ({
  icon,
  variant = "primary",
  onChange,
  placeholder,
  id,
  style,
  type = "text",
  ...props
}: InputProps) => {
  return (
    <div className={`${Styles.inputContainer} ${Styles[variant]}`}>
      <input
        type={type}
        style={style}
        {...props}
        onChange={() => onChange}
        id={id}
        placeholder={placeholder}
      />
      {!!icon && <span className={Styles.iconContainer}>{icon}</span>}
    </div>
  );
};

export default Input;
