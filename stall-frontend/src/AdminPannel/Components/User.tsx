import { useState } from "react";
import useUsers from "../../hooks/useUsers";
import authService, { registerUser } from "../../shared/services/authService";
import RegisterUser from "./registerUser/RegisterUser";

const User = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const { data, setData } = useUsers();

  const onClose = () => {
    setIsAddPopupOpen(false);
  };

  const handleClick = () => {
    setIsAddPopupOpen(true);
  };

  const handleDelete = (user: registerUser) => {
    const originalProducts = [...data];
    setData(data.filter((product) => product.id !== user.id));
    authService
      .deleteUser(user)
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
      <div className="d-flex justify-content-between ">
        <div className="mb-3"></div>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Add User
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>IsAdmin</th>
            <th>email</th>
            <th>gender</th>
            <th>phone</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.isAdmin ? "true" : "false"}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(user)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAddPopupOpen && <RegisterUser onClose={() => onClose()} />}
    </>
  );
};

export default User;
