import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import SearchProvider from "./providers/searchProvider.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import CartProvider from "./providers/CartProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <CartProvider>
        <AuthProvider>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </AuthProvider>
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
