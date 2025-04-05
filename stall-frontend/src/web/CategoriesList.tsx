import useCategories, { Category } from "../hooks/useCategory";
import { Dropdown } from "react-bootstrap";
interface Props {
  onSelectCategory: (category: Category | null) => void;
  selectedCategory: Category | null;
}

const CategoriesList = ({ onSelectCategory, selectedCategory }: Props) => {
  const { data } = useCategories();

  const getSelectedCategory = () => {
    if (selectedCategory) return selectedCategory.name;
    return "All Categories";
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {getSelectedCategory()}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSelectCategory(null)}>
          All Categories
        </Dropdown.Item>
        {data.map((category) => (
          <Dropdown.Item
            key={category.id}
            onClick={() => onSelectCategory(category)}
          >
            {category.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoriesList;
