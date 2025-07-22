import Input, { InputProps } from "../Input";
import Styles from "./IconInput.module.css"

type IconInputProps = {
  children: React.ReactNode;
} & InputProps;

const IconInput = ({ children, ...props }: IconInputProps) => {
  return (
    <div className={Styles.iconInputContainer}>
      <Input {...props} />
      <div className={Styles.iconContainer}>{children}</div>
    </div>
  );
};

export default IconInput;
