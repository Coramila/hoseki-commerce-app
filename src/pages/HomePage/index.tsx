import Button from "../../components/Button";
import Categories from "../../components/Categories";
import HeroBanner from "../../components/HeroBanner";
import Newsletter from "../../components/Newsletter";
import ProductList from "../../components/ProductList";
import Typography from "../../components/Typography";
import { Category } from "../../common/types/category";
import {
  CATEGORIES_BASE_URL,
  PRODUCTS_BASE_URL,
} from "../../common/constants/endpoints";
import { Product } from "../../common/types/product";
import StatusHandler from "../../common/utils/statusHandler";
import useFetch from "../../common/hooks/useFetch";

function HomePage() {
  const handleSubscribe = (email: string) => {
    console.log(`Usuário inscrito com o email: ${email}`);
  };

  // Fetch de categorias
  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useFetch<{ categories: Category[] }>(CATEGORIES_BASE_URL);
  // Fetch de produtos
  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);
  return (
    <>
      <HeroBanner
        backgroundImage="https://raw.githubusercontent.com/Coramila/hoseki-assets/refs/heads/main/banner-seceos-tablet.png"
        mainImage="https://raw.githubusercontent.com/Coramila/hoseki-assets/refs/heads/main/hero.png"
      >
        <Typography variant="h1">
          Hora de abraçar seu{" "}
          <span style={{ color: "#8fff24" }}>lado geek!</span>
        </Typography>
        <Button onClick={() => console.log("ver novidades")} size="large">
          Ver as novidades!
        </Button>
      </HeroBanner>
      <main className="container">
        <StatusHandler isLoading={isLoadingCategories} error={categoriesError}>
          {categoriesData && (
            <Categories categories={categoriesData?.categories} />
          )}
        </StatusHandler>

        <StatusHandler isLoading={isLoadingProducts} error={productsError}>
          {productsData && (
            <ProductList
              title="Promoções especiais"
              products={productsData?.products}
            />
          )}
        </StatusHandler>
      </main>
      <Newsletter onSubscribe={handleSubscribe} />
    </>
  );
}

export default HomePage;
