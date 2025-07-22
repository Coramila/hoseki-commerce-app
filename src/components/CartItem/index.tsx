import { Product } from "../../common/types/product";
import Button from "../Button";
import Typography from "../Typography";
import Styles from "./CartItem.module.css"

type CartItemProps ={
    item: Product;
    removeFromCart:(id: number) => void;
}

const CartItem = ({item, removeFromCart}: CartItemProps) => {
  return (
    <div key={item.id} className={Styles.cartItem}>
      <div className={Styles.cartImageContainer}>
        <img src={item.imageSrc} alt={item.label} />
      </div>
      <div className={Styles.itemDetails}>
        <div>
          <Typography variantStyle="h6-small">{item.label}</Typography>
          <Typography variantStyle="body">{item.description}</Typography>
        </div>
        <Typography variantStyle="body-semi-bold">R$ {item.price}</Typography>
        <Typography variantStyle="body-small-bold">Quantidade: 1</Typography>
        <Typography variantStyle="body-small-bold">Tamanho: único</Typography>
        <Button onClick={() => removeFromCart(item.id)}>Excluir</Button>
      </div>
    </div>
  );
};

export default CartItem;
