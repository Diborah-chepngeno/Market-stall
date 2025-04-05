import { Product } from "../hooks/useProduct";

export interface CartProduct {
  id: number;
  price: number;
  name: string;
  quantity: number;
  image: string;
  gender: string;
  description: string;
  categoryId: number;
}

export interface CartAction {
  type: "ADD" | "DECREMENT" | "DELETE";
  product: Product;
}

const cartReducer = (carts: CartProduct[], action: CartAction) => {
  switch (action.type) {
    case "ADD": {
      const existingProduct = carts.find(
        (product) => product.id === action.product.id
      );

      if (existingProduct) {
        return carts.map((product) =>
          product.id === action.product.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...carts, { ...action.product, quantity: 1 }];
    }

    case "DECREMENT": {
      return carts
        .map((product) =>
          product.id === action.product.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0); // Remove products with quantity 0
    }
    case "DELETE": {
      return carts.filter((product) => product.id !== action.product.id); // Remove products with quantity 0
    }

    default:
      return carts;
  }
};

export default cartReducer;
