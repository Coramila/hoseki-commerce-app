import { CATEGORIES_BASE_URL } from "../../constants/endpoints";
import { ICategoryService } from "../../interfaces/categoryService.interface";
import { IHttp } from "../../interfaces/http.interface";
import { Category } from "../../types/category";

const CategoryService = (http: IHttp): ICategoryService => {
  return {
    fetchCategories: async () => {
      try {
        const response = await http.get<{ categories: Category[] }>(
          CATEGORIES_BASE_URL
        );
        return response.categories;
      } catch (error) {
        throw new Error("Erro ao buscar categorias");
      }
    },
  };
};

export default CategoryService;