import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear all data from localStorage
    localStorage.clear();

    // Redirect to login page
    navigate("/");

    // Refresh the page to clear any cached state
    window.location.reload();
  }, [navigate]);

  return null; // No UI needed
};

export default Logout;
