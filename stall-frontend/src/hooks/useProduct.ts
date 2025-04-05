import { Category } from "./useCategory";
import useData from "./useData";

export interface Product {
  id: number;
  price: number;
  name: string;
  image: string;
  categoryId: number;
  stallId: number;
  quantity: number;
}

const useProducts = (search: string, selectedCategory: Category | null) =>
  useData<Product>(
    `/products`,
    {
      params: {
        ...(selectedCategory && {
          categoryId: selectedCategory?.id,
        }),
        ...(search && { name: search }),
      },
    },
    [search, selectedCategory?.id]
  );

export default useProducts;
