import { useState } from "react";
import useCategories, { Category } from "../../hooks/useCategory";
import categoryService from "../../shared/services/category-service";
import UpdateCategory from "./UpdateCategory";
import CreateCategory, { formData } from "./CreateCategory";

const CategoryPage = () => {
  const [updateCategoryPopup, setUpdateCategoryPopup] = useState(false);
  const [addCategoryPopup, setAddCategoryPopup] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({ id: 0, name: "" });

  const { data, setData, setError } = useCategories();

  const handleUpdateCategory = (category: Category) => {
    setUpdateCategoryPopup(true);
    setCurrentCategory(category);
  };

  const handleUpdate = (formData: Category) => {
    const originalProducts = [...data];

    setData(data.map((p) => (p.id === formData.id ? formData : p)));
    categoryService
      .update(formData)
      .then((res) => alert(`updated successfully ${res.statusText}`))
      .catch((error) => {
        setData(originalProducts);
        setError(error.message);
      });
    setUpdateCategoryPopup(false);
  };

  const onClose = () => {
    setUpdateCategoryPopup(false);
    setCurrentCategory({ id: 0, name: "" });
  };

  const handleClose = () => {
    setAddCategoryPopup(false);
  };

  const handleCreate = (createdCategory: formData) => {
    const originalProducts = [...data];
    categoryService
      .create(createdCategory)
      .then((res) => setData([...data, res.data]))
      .catch((err) => {
        setData([...originalProducts]);
        setError(err.message);
      });
  };

  const handleDelete = (id: number) => {
    const originalProducts = [...data];
    setData(data.filter((cat) => cat.id !== id));
    categoryService
      .delete(id)
      .then((res) => {
        alert(`deleted successfully ${res.statusText}`);
      })
      .catch((err) => {
        alert(`deleting product failed ${err}`);
        setData(originalProducts);
      });
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setAddCategoryPopup(true)}
      >
        Add Category
      </button>
      <table className="table table-bordered">
        <thead>
          <th>name</th>
          <th>update Category</th>
          <th>delete</th>
        </thead>
        <tbody>
          {data.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleUpdateCategory(category)}
                >
                  update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(category.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {addCategoryPopup && (
        <CreateCategory
          onClose={handleClose}
          onSave={(categoryData) => handleCreate(categoryData)}
        />
      )}
      {updateCategoryPopup && (
        <UpdateCategory
          onClose={onClose}
          onSave={(formData) => handleUpdate(formData)}
          category={currentCategory}
        />
      )}
    </>
  );
};
export default CategoryPage;
