   import Styles from "./CartList.module.css";
   import { Product } from "../../common/types/product";
   import CartEmptyMessage from "../CartEmptyMessage";
   import Typography from "../Typography";
   import CartItem from "../CartItem";

   type CartListProps = {
     cartItems: Product[];
     onRemove: (id: number) => void;
   };

   const CartList = ({ cartItems, onRemove }: CartListProps) => (
     <div className={Styles.cartItems}>
       <Typography variantStyle="body-large-bold" className={Styles.cartItemTitle}>
         Detalhes da compra
       </Typography>
       {cartItems.length > 0 ? (
         cartItems.map((item) => (
           <CartItem key={item.id} item={item} removeFromCart={onRemove} />
         ))
       ) : (
         <CartEmptyMessage />
       )}
     </div>
   );

   export default CartList;