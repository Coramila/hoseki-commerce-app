import { CSSProperties } from "react";
import styles from "./Divider.module.css";

type DividerProps = {
  style?: CSSProperties;
};

const Divider = ({ style }: DividerProps) => {
  return <hr className={styles.divider} style={style} />;
};

export default Divider;
