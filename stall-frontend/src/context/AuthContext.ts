import { createContext } from "react";

// Define AuthContext type
export interface AuthContextType {
  user: any;
  isAdmin: boolean;
  login: (user: any, token: string) => void;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Provider Component
export default AuthContext;
