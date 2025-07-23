import Button, { ButtonProps } from "../../components/Button";

type IconButtonProps = {
  children: React.ReactNode;
} & ButtonProps;

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <Button style={{ gap: "8px" }} {...props}>
      {children}
    </Button>
  );
};

export default IconButton;
