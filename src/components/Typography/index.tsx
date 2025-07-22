import { ReactNode, CSSProperties } from "react";
import styles from "./Typrography.module.css";
import classNames from "classnames"; // Para combinar classes de maneira segura

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
type VariantStyle =
  | "body"
  | "body-large"
  | "body-large-bold"
  | "body-small"
  | "body-small-bold"
  | "body-semi-bold"
  | "caption"
  | "heading-small"
  | "heading"
  | "heading-regular"
  | "heading-semi-bold"
  | "h6-small";

type TypographyProps = {
  variant?: Variant;
  variantStyle?: VariantStyle;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Typography = ({
  variant = "p",
  variantStyle,
  children,
  className,
  style,
}: TypographyProps) => {
  const Tag = variant;

  return (
    <Tag
      className={classNames(
        styles[variant],
        variantStyle && styles[variantStyle],
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Typography;
