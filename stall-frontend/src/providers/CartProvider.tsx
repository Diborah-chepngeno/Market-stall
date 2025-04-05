import { ReactNode, useReducer } from "react";
import cartReducer from "../Reducers/CartReducer";
import CartContext from "../context/CartContext";

interface Prop {
  children: ReactNode;
}

const CartProvider = ({ children }: Prop) => {
  const [carts, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ carts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
