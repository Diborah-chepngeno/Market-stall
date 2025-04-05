import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../../hooks/useProduct";
import "../popup.css";
interface Props {
  product: Product;
  onClose: () => void;
  onSave: (formData: Product) => void;
}

const UpdateProduct = ({ product, onClose, onSave }: Props) => {
  // const forms = useForm();
  const [formData, setFormData] = useState<Product>(product);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <div className="popup-overlay ">
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <h2>update products</h2>
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
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stallId" className="form-label">
              StallId
            </label>
            <Input
              id="stallId"
              name="stallId"
              value={formData.stallId}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Price
            </label>
            <Input
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Category Id
            </label>
            <Input
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
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

export default UpdateProduct;
