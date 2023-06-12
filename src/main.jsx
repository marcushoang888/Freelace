import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContext from "./config/CartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
import "./index.css";
export const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
