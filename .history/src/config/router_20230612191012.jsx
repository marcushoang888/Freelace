import { createBrowserRouter } from "react-router-dom";

import { ProductRouter } from "../Layout/ProductRouter/ProductRouter";
import { SolutionRouter } from "../Layout/SolutionRouter/SolutionRouter";
import { InquiryRouter } from "../Layout/InquiryRouter/InquiryRouter";
import NavBar from "../Common/NavBar/NavBar";
import Cart from "../Common/Cart/Cart";
import RootLayout from "../Layout/RootLayout";
export const router = createBrowserRouter([
  {
    element: (
      <RootLayout/>
    ),
    children: [
      {path: "/", element: <>Hello</>},
      ProductRouter, SolutionRouter, InquiryRouter],
  },
]);
