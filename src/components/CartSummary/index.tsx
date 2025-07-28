import { ShoppingBagIcon } from "../../common/icons/ShoppingBagIcon";
import CartActions, { CartActionsProps } from "../CartActions";
import Divider from "../Divider";
import Field from "../Field";
import Typography from "../Typography";
import Styles from "./CartSummary.module.css";

type CartSummaryProps = {
  itemCount: number;
  total: number;
  freight: number;
  handleRedirect: () => void;
} & CartActionsProps;



const CartSummary = ({itemCount, total, freight, handleRedirect, onPayment }: CartSummaryProps) => (
  <div className={Styles.cartSummary}>
    <Typography variantStyle="heading-small">Sumário</Typography>
    <div className={Styles.discount}>
      <Field
        label="Cupom de desconto"
        inputId="cupom"
        inputPlaceholder="Digite o cupom"
        buttonText="Ok"
        onButtonClick={() => {}}
        onChange={() => {}}
      />
    </div>
    <div className={Styles.summaryResume}>
      <Typography variantStyle="body-small-bold">
        {itemCount} {itemCount > 1 ? 'Produtos' : 'Produto'}
      </Typography>
      <Typography variantStyle="body-small-bold">R$ {total}</Typography>
      <Typography variantStyle="body-small-bold">Frete:</Typography>
      <Typography variantStyle="body-small-bold">R$ {freight}</Typography>
    </div>
    <Divider style={{ borderColor: "#780BF7" }} />
    <div className={Styles.total}>
      <Typography variantStyle="body-large-bold">
        <ShoppingBagIcon />
        <span style={{ marginLeft: "4px" }}>Total:</span>
      </Typography>
      <Typography variantStyle="body-large-bold" className={Styles.total}>
        R$ {total + freight}
      </Typography>
    </div>
    <CartActions handleRedirect={handleRedirect} onPayment={onPayment}/>
  </div>
);

export default CartSummary;
