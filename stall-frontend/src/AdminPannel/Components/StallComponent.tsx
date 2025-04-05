import { useState } from "react";
import useStall from "../../hooks/useStall";
import stallService from "../../shared/services/stallService";
import AddStallComponent, { formData } from "./AddStallComponent";

const StallComponent = () => {
  const { data, setData, setError } = useStall();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  const handleDelete = (id: number) => {
    const originalProducts = [...data];
    setData(data.filter((product) => product.id !== id));
    stallService
      .delete(id)
      .then((res) => {
        alert(`deleted successfully ${res.statusText}`);
      })
      .catch((err) => {
        alert(`deleting product failed ${err}`);
        setData(originalProducts);
      });
  };

  const onClose = () => {
    setIsAddPopupOpen(false);
  };

  const handleCreate = (CreatedProduct: formData) => {
    const originalProducts = [...data];
    stallService
      .create(CreatedProduct)
      .then((res) => setData([...data, res.data]))
      .catch((err) => {
        setData([...originalProducts]);
        setError(err.message);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between ">
        <div className="mb-3">
          <button
            className="btn btn-primary"
            onClick={() => setIsAddPopupOpen(true)}
          >
            Add Product
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>stall number</th>
            <th>location</th>
            <th>size</th>
            <th>isOccupied</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.number}</td>
              <td>{product.location}</td>
              <td>{product.size}</td>
              <td>{product.isOccupied ? "true" : "false"}</td>

              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAddPopupOpen && (
        <AddStallComponent
          onSave={(data) => handleCreate(data)}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default StallComponent;
