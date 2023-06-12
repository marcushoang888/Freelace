
import ProductLayout from "./ProductLayout";
import Product from "../../Pages/Product/pages/Product"
import ProductDetail from "../../Pages/Product/pages/ProductDetail"

export const ProductRouter = {
    element: <ProductLayout />,
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
  };

