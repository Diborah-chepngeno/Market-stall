import { HStack, Box } from "@chakra-ui/react";
import SearchInput from "../shared/components/SearchInput";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const role = localStorage.getItem("role");
  const Token = localStorage.getItem("token");
  console.log(role);
  const getRole = () => {
    if (role === "Admin") return "All Bookings";
    return "My Bookings";
  };
  console.log(getRole());
  return (
    <HStack
      padding="10px"
      h="50px"
      borderRadius="20px"
      className="navbar navbar-expand-md navbar-light fixed-top"
      style={{
        backgroundColor: "blueviolet",
        zIndex: 1030,
      }}
      width="100%"
      justifyContent="space-between"
    >
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>

      <Box>
        <SearchInput />
      </Box>

      <NavLink to="/cart">{getRole()}</NavLink>

      {role == "Admin" && <NavLink to="/admin">Admin</NavLink>}
      {Token ? (
        <NavLink to="/logout">Logout</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </HStack>
  );
};

export default Navbar;
