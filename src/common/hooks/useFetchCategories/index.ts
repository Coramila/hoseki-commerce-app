import { useState, useEffect } from "react";
import { Category } from "../../types/category";
import { ICategoryService } from "../../interfaces/categoryService.interface";

type FetchCategoriesResult = {
  categories: Category[] | null;
  isLoading: boolean;
  error: string | null;
};

export const useFetchCategories = (
  categoryService: ICategoryService
): FetchCategoriesResult => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const categoryData = await categoryService.fetchCategories();
        setCategories(categoryData);
        setIsLoading(false);
      } catch (err) {
        setError("Erro ao carregar as categorias.");
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [categoryService]);

  return { categories, isLoading, error };
};