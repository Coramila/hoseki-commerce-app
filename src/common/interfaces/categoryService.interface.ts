import { Category } from "../types/category";

export interface ICategoryService {
  fetchCategories: () => Promise<Category[]>;
}