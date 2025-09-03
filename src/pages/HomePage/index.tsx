import { useEffect, useState } from "react";
import axios from "axios";
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

function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [productsError, setProductsError] = useState<string | null>(null);

  const handleSubscribe = (email: string) => {
    console.log(`Usuário inscrito com o email: ${email}`);
  };

  // Fetch de categorias
  useEffect(() => {
    axios
      .get(CATEGORIES_BASE_URL)
      .then((response) => {
        setCategories(response.data.categories);
        setIsLoadingCategories(false);
      })
      .catch((err) => {
        setCategoriesError("Erro ao carregar categorias.");
        setIsLoadingCategories(false);
      });
  }, []);

  // Fetch de produtos
  useEffect(() => {
    axios
      .get(PRODUCTS_BASE_URL)
      .then((response) => {
        setProducts(response.data.products);
        setIsLoadingProducts(false);
      })
      .catch((err) => {
        setProductsError("Erro ao carregar produtos.");
        setIsLoadingProducts(false);
      });
  }, []);

  return (
    <>
      <HeroBanner
        backgroundImage="https://raw.githubusercontent.com/Coramila/hoseki-assets/refs/heads/main/banner-seceos-tablet.png"
        mainImage="https://raw.githubusercontent.com/Coramila/hoseki-assets/refs/heads/main/hero.png"
      >
        <Typography variant="h1">
          Descubra o Brilho {" "}
          <span>que Fala por Você</span>
        </Typography>
        <Button
          onClick={() => console.log("ver novidades")}
          size="large"
          text="Ver as novidades!"
        />
      </HeroBanner>
      <main className="container">
        <StatusHandler isLoading={isLoadingCategories} error={categoriesError}>
          <Categories categories={categories} />
        </StatusHandler>

        <StatusHandler isLoading={isLoadingProducts} error={productsError}>
          <ProductList title="Promoções especiais" products={products} />
        </StatusHandler>
      </main>
      <Newsletter onSubscribe={handleSubscribe} />
    </>
  );
}

export default HomePage;