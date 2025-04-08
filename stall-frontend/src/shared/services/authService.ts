import apiClient from "./apiClient";

export interface Login {
  username: string;
  password: string;
}

export interface registerUser {
  id: number;
  username: string;
  password: string;
  email: string;
  phone: number;
  address: string;
}

class AuthService {
  registerUser = (formData: registerUser) => {
    console.log(formData);
    return apiClient.post("/auth/users", formData);
  };

  deleteUser = (user: registerUser) => {
    console.log(user.id);
    return apiClient.delete("/auth/users/" + `${user.id}`);
  };

  login = (formData: Login) => {
    return apiClient.post("/auth/login", formData);
  };
}

export default new AuthService();
