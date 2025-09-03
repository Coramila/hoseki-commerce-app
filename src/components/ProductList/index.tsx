import Styles from "./ProductList.module.css";
import Card from "../Card";
import Typography from "../Typography";
import { Link } from "react-router-dom";
import { Product } from "../../common/types/product";

type ProductListProps = {
  title: string;
  products: Product[];
};

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <section className={Styles.productList}>
      <Typography variant="h4" className={Styles.title}>
        {title}
      </Typography>
      <div className={Styles.gridContainer}>
        {products.map((product) => (
          <Link to={`/produto/${product.id}`} key={product.id}>
            <Card
              id={product.id}
              key={`product-card-${product.id}`}
              label={product.label}
              price={product.price}
              imageSrc={product.imageSrc}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;