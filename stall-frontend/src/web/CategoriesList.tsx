import { ChangeEvent } from "react";
import useCategories, { Category } from "../hooks/useCategory";

interface Props {
  onSelectCategory: (category: Category | null) => void;
}

const CategoriesList = ({ onSelectCategory }: Props) => {
  const { data } = useCategories();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;

    const selectedCategory = data.find(
      (category) => category.name === selectedName
    );
    console.log(selectedCategory);
    onSelectCategory(selectedCategory || null);
  };

  return (
    <select className="form-select" onChange={handleChange}>
      <option value="">All categories</option>
      {data.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoriesList;
