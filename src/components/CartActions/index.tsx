import Button from "../Button";
import Styles from "./CartActions.module.css";
export type CartActionsProps = {
  handleRedirect: (e: React.MouseEvent<HTMLElement>) => void;
  onPayment: (e: React.MouseEvent<HTMLElement>) => void;
};

const CartActions = ({ handleRedirect, onPayment }: CartActionsProps) => (
  <div className={Styles.cartActions}>
    <Button onClick={handleRedirect} variant="secondary">
      Continuar comprando
    </Button>
    <Button onClick={onPayment}>Ir para pagamento</Button>
  </div>
);

export default CartActions;
