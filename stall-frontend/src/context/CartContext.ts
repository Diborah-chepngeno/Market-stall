import { createContext, Dispatch } from "react";
import { CartAction, CartProduct } from "../Reducers/CartReducer";

export interface CartContextType {
  carts: CartProduct[];
  dispatch: Dispatch<CartAction>;
}

// Create context
const CartContext = createContext<CartContextType>({} as CartContextType);

export default CartContext;
