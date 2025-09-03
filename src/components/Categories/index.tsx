import { Category } from "../../common/types/category";
import Typography from "../Typography";
import Styles from "./Categories.module.css";

type CategoriesProps = {
  categories: Category[];
};

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <article className={Styles.categories}>
      <Typography variant="h4" className={Styles.title}>
        Categorias
      </Typography>

      <Typography variantStyle="heading-small" className={Styles.subTitle}>
        Os mais diversos acessórios que você precisa adicionar ao seu porta-jóias
      </Typography>

      {categories.map((category, index) => {
        if (index % 2 === 0) {
          const nextCategory = categories[index + 1];

          // Se for o segundo par (index >= 2), adiciona a classe reverse
          const sectionClassName =
            index >= 2
              ? `${Styles.gridContainer} ${Styles.reverse}`
              : Styles.gridContainer;

          return (
            <section key={`category-${index}`} className={sectionClassName}>
              <div className={Styles.gridItem1}>
                <img src={category.imageSrc} alt={category.label} />
                <div className={Styles.gridLabel}>
                  <Typography variant="h5">{category.label}</Typography>
                </div>
              </div>

              {nextCategory && (
                <div className={Styles.gridItem2}>
                  <img src={nextCategory.imageSrc} alt={nextCategory.label} />

                  <div className={Styles.gridLabel}>
                    <Typography variant="h5">{nextCategory.label}</Typography>
                  </div>
                </div>
              )}
            </section>
          );
        }

        return null;
      })}
    </article>
  );
};

export default Categories;
