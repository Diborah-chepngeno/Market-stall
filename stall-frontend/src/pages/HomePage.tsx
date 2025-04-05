import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import Sidebar from "./SideBar";
import ProductsGrid from "../web/products/ProductsGrid";
import { useState } from "react";
import { Category } from "../hooks/useCategory";

const HomePage = () => {
  const [selectedCategory, setSelectedCategoy] = useState<Category | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <Show above="md">
        <GridItem area="aside">
          <Sidebar
            onSelectCategory={(category) => setSelectedCategoy(category)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <ProductsGrid selectedCategory={selectedCategory} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
