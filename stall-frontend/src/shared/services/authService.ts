import apiClient from "./apiClient";

export interface Login {
  username: string;
  password: string;
}

export interface registerUser {
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

  login = (formData: Login) => {
    return apiClient.post("/auth/login", formData);
  };
}

export default new AuthService();
