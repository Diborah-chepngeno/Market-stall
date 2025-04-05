import useUsers from "../../hooks/useUsers";

const User = () => {
  const { data } = useUsers();

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <th>id</th>
          <th>name</th>
          <th>IsAdmin</th>
          <th>email</th>
          <th>gender</th>
          <th>phone</th>
          <th>delete</th>
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
                  // onClick={() => handleDelete(user.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
