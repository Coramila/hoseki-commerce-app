import { ReactNode } from "react";
import styles from "./HeroBanner.module.css";

export type HeroBannerProps = {
  backgroundImage?: string;
  mainImage?: string;
  children?: ReactNode;
};

const HeroBanner = ({
  backgroundImage,
  mainImage,
  children,
}: HeroBannerProps) => {
  const backgroundImg = backgroundImage? { backgroundImage: `url(${backgroundImage})` }:{};
  return (
    <section className={styles.heroBanner}>
      <div
        className={styles.gridOverlay}
        style={backgroundImg }
      ></div>
      <div className={styles.heroContent}>
        {mainImage && (
          <div className={styles.mainImageWrapper}>
            <img
              src={mainImage}
              alt="Descubra o Brilho que Fala por Você!"
              className={styles.mainImage}
            />
          </div>
        )}

        {children && <div className={styles.textContent}>{children}</div>}
      </div>
    </section>
  );
};

export default HeroBanner;
