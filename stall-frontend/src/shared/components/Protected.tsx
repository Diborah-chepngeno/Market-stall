import { Navigate, Outlet } from "react-router-dom";

// Function to get user data from localStorage
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Component for protected routes
const PrivateRoute = ({ adminOnly }: { adminOnly?: boolean }) => {
  const user = getUser();

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect to login if not logged in
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" replace />; // Redirect non-admin users to home
  }

  return <Outlet />; // Render child routes
};

export default PrivateRoute;
