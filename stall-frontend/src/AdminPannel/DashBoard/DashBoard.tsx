import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div className="row bg-info h-200">
        <div className="col">
          <NavLink to="/admin">Products</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/categories">categories</NavLink>
        </div>
        <div className="col">
          <NavLink to="/admin/stalls">Stalls</NavLink>
        </div>

        <div className="col">
          <NavLink to="/admin/users">Users</NavLink>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default DashBoard;
