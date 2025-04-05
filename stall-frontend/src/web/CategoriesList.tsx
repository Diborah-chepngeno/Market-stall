import useCategories, { Category } from "../hooks/useCategory";
import { Dropdown } from "react-bootstrap";
interface Props {
  onSelectCategory: (category: Category | null) => void;
}

const CategoriesList = ({ onSelectCategory }: Props) => {
  const { data } = useCategories();

  // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const selectedName = event.target.value;

  //   const selectedCategory = data.find(
  //     (category) => category.name === selectedName
  //   );
  //   console.log(selectedCategory);
  //   onSelectCategory(selectedCategory || null);
  // };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Category
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
