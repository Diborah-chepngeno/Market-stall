import { useState } from "react";
import { Product } from "../../hooks/useProduct";
import UpdateProduct from "./UpdateProduct";
import useCategories from "../../hooks/useCategory";
import useStall from "../../hooks/useStall";

interface Props {
  onSave: (updatedProduct: Product) => void;
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductList = ({ products, onDelete, onSave }: Props) => {
  const { data } = useCategories();
  const { data: stalls } = useStall();
  console.log(products);
  const [currentProduct, setCurrentProduct] = useState<Product>({
    id: 0,
    price: 0,
    name: "",
    image: "",
    stallId: 0,
    categoryId: 0,
    quantity: 0,
  });
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);

  const handleSave = (updatedProduct: Product) => {
    onSave(updatedProduct);
  };

  const handleUpdate = (product: Product) => {
    setIsUpdatePopupOpen(true);
    setCurrentProduct(product);
  };

  const closeUpdatePopup = () => {
    setIsUpdatePopupOpen(false);
    setCurrentProduct({
      id: 0,
      price: 0,
      name: "",
      image: "",
      quantity: 0,
      stallId: 0,
      categoryId: 0,
    });
  };

  const getCategoryName = (categoryId: number) => {
    const category = data.find((category) => category.id === categoryId);
    return category && category.name;
  };
  const getStallNumber = (stallId: number) => {
    const stall = stalls.find((stall) => stall.id === stallId);
    return stall && stall.number;
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>name</th>
            <th>image</th>
            <th>stall number</th>
            <th>price</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <img
                  src={product.image}
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>{getStallNumber(product.stallId)}</td>
              <td>{product.price}</td>

              <td>{getCategoryName(product.categoryId)}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleUpdate(product)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isUpdatePopupOpen && (
        <UpdateProduct
          product={currentProduct}
          onClose={closeUpdatePopup}
          onSave={(updatedProduct) => handleSave(updatedProduct)}
        />
      )}
    </>
  );
};

export default ProductList;
