import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategory";

interface Prop {
  onSelectCategory: (category: Category) => void;
}

const Sidebar = ({ onSelectCategory }: Prop) => {
  const { data, isLoading } = useCategories();

  return (
    <>
      <List marginLeft="0px" marginTop="15px">
        <Heading fontSize="2xl" color="blue" marginBottom="3">
          CATEGORIES
        </Heading>
        {isLoading && <Spinner />}

        {data.map((category) => (
          <ListItem key={category.id} paddingY="8px">
            <Button
              textAlign="left"
              fontSize="xl"
              variant="link"
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
