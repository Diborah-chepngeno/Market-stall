// Frontend/frontend/src/components/Auth/Login.component.jsx
import { Input, HStack, Button } from "@chakra-ui/react";
import authService, { Login } from "../../shared/services/authService";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function LoginComponent() {
  const { register, handleSubmit } = useForm<Login>();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (data: Login) => {
    console.log(data);
    authService
      .login({ ...data })
      .then((res) => {
        // Check if res.data exists and contains user and token
        if (res?.data?.user && res?.data?.token) {
          const { user, token } = res.data;
          login(user, token); // Assuming login stores the user data in context or localStorage
          navigate("/");
          window.location.reload();
        } else {
          // If response structure is invalid
          alert("Invalid response from the server.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert(`Invalid credentials: ${err.message}`);
      });

    // authService
    //   .login({ ...data })
    //   .then((res) => {
    //     console.log(res);
    //     const { user, token } = res.data;
    //     login(user, token); // Store user in context
    //     navigate("/");
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     alert(`Invalid credentials: ${err.message}`);
    //   });
  };

  return (
    <div className="register-form-container bg-dark ">
      <form className=" register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-2 text-center">Register</h2>

        <Input
          {...register("username", { required: true, minLength: 3 })}
          className=" input-field"
          type="text"
          placeholder="Username"
        />
        <Input
          {...register("password", { required: true, minLength: 8 })}
          className="input-field"
          type="password"
          placeholder="Password"
        />

        <HStack justifyContent="space-between">
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
          <NavLink
            to="/register"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Register
          </NavLink>
        </HStack>
      </form>
    </div>
  );
}

export default LoginComponent;
