import { Spinner } from "@chakra-ui/react";
import { Category } from "../../hooks/useCategory";
import useProducts, { Product } from "../../hooks/useProduct";
import ProductList from "./ProductList";
import CategoriesList from "../../web/CategoriesList";
import { useState } from "react";
import productService from "../../shared/services/product-service";
import CreateProduct, { formData } from "./CreateProduct";
import useSearch from "../../hooks/useSearch";

const ProductsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const { search } = useSearch();
  const { data, error, isLoading, setError, setData } = useProducts(
    search,
    selectedCategory
  );
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  const onClose = () => {
    setIsAddPopupOpen(false);
  };

  const handleDelete = (id: number) => {
    const originalProducts = [...data];
    setData(data.filter((product) => product.id !== id));
    productService
      .delete(id)
      .then((res) => {
        alert(`deleted successfully ${res.statusText}`);
      })
      .catch((err) => {
        alert(`deleting product failed ${err}`);
        setData(originalProducts);
      });
  };

  const handleUpdate = (formData: Product) => {
    const originalProducts = [...data];

    setData(data.map((p) => (p.id === formData.id ? formData : p)));

    productService
      .update(formData)
      .then((res) => alert(`updated successfully ${res.statusText}`))
      .catch((error) => {
        setData(originalProducts);
        setError(error.message);
      });
    setIsAddPopupOpen(false);
  };

  const handleCreate = (CreatedProduct: formData) => {
    const originalProducts = [...data];
    productService
      .create(CreatedProduct)
      .then((res) => setData([...data, res.data]))
      .catch((err) => {
        setData([...originalProducts]);
        setError(err.message);
      });
  };

  if (error) return <p>{error}</p>;

  return (
    <>
      {isLoading && <Spinner />}
      <div>
        <div className="d-flex justify-content-between ">
          <div className="mb-3">
            <CategoriesList
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              onClick={() => setIsAddPopupOpen(true)}
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="mb-3">
          <ProductList
            onSave={(updatedProduct) => handleUpdate(updatedProduct)}
            products={data}
            onDelete={(id) => handleDelete(id)}
          />
        </div>
      </div>
      {isAddPopupOpen && (
        <CreateProduct
          onSave={(data) => handleCreate(data)}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default ProductsGrid;
