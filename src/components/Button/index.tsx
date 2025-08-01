import { ReactNode, ButtonHTMLAttributes } from "react";
import classnames from "classnames"; // Para combinar classes dinamicamente
import Styles from "./Button.module.css";

export type ButtonProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Define diferentes tamanhos
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
 

  return (
    <button
      className={classnames(Styles[variant], Styles[size])}
      {...props}
    >

      {/* Princípio da responsabilidade única (não atende, recebe 2 spans e um renderiza o ícone) 
      <span className={Styles.icon}>{icon}</span>
      <span className={Styles.text}>{text ? text : children}</span>*/}

      {children}
    </button>
  );
};

export default Button;
