import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductsCardContainer from "./ProductsCardContainer";
import ProductsCardSkeleton from "./ProductsCardSkeleton";
import ProductsCard from "./ProductsCard";
import { Category } from "../../hooks/useCategory";
import useProducts from "../../hooks/useProduct";
import useSearch from "../../hooks/useSearch";

interface Prop {
  selectedCategory: Category | null;
}

const ProductsGrid = ({ selectedCategory }: Prop) => {
  const { search } = useSearch();
  const { data, error, isLoading } = useProducts(search, selectedCategory);

  // console.log(search);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProductsCardContainer key={skeleton}>
            <ProductsCardSkeleton />
          </ProductsCardContainer>
        ))}
      {data.length === 0 && (
        <Text fontSize="xl" color="red">
          No products on category {selectedCategory?.name}{" "}
        </Text>
      )}
      {data.map((product) => (
        <ProductsCardContainer key={product.id}>
          <ProductsCard product={product} />
        </ProductsCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
