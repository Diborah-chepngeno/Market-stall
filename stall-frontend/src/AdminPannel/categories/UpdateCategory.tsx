import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import "../popup.css";
import { Category } from "../../hooks/useCategory";

interface Props {
  category: Category;
  onClose: () => void;
  onSave: (formData: Category) => void;
}

const UpdateCategory = ({ onClose, onSave, category }: Props) => {
  const [formData, setFormData] = useState<Category>(category);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave(formData);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="popup-overlay ">
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <h2>update Category</h2>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="d-flex justify-content-between">
            <Button
              marginRight="40x"
              fontSize="xl"
              colorScheme="blue"
              type="submit"
            >
              save
            </Button>
            <Button
              fontSize="xl"
              colorScheme="blue"
              className="close-button"
              onClick={() => onClose()}
            >
              close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
