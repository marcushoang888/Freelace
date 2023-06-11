import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Product from "../Product/pages/Product";
import ProductDetail from "../Product/pages/ProductDetail";
import Solution from "../Solution/Solution";
import NavBar from "../Common/components/NavBar";
import Cart from "../Cart/Cart";
import Inquiry from "../Inquiry/Inquiry";
export const router = createBrowserRouter([
  {
    element: (
      <>
        <NavBar />
        <Cart />
      </>
    ),
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/products/search?",
            element: (
              <>
                <Product />
              </>
            ),
          },
          {
            path: "/products/:id",
            element: (
              <>
                <ProductDetail />
              </>
            ),
          },
        ],
      },
      {
        path: "/solution",
        element: (
          <>
            <Solution />
          </>
        ),
      },
      {
        path: "/inquiry",
        element: (
          <>
            <Inquiry />
          </>
        ),
      },
    ],
  },
]);
