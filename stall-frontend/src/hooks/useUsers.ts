import useData from "./useData";

export interface User {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
  email: string;
  phone: number;
  address: string;
  gender: string;
}

const useUsers = () =>
  useData<User>(`/auth/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useUsers;
