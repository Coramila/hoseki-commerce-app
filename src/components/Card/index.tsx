import Styles from "./Card.module.css";
import Typography from "../Typography";

type CardProps = {
  id: number;
  label: string;
  price: number;
  imageSrc: string;
};

const Card = ({ label, price, imageSrc, id }: CardProps) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.imageContainer}>
        <img src={imageSrc} alt={label} className={Styles.cardImage} />
      </div>
      <div className={Styles.cardContent}>
        <div className={Styles.cardContentInner}>
          <Typography variant="h6">{label}</Typography>
          <Typography variantStyle="heading-semi-bold">
            {price.toFixed(2)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;