import { createBrowserRouter } from "react-router-dom";

import { ProductRouter } from "../Layout/ProductRouter/ProductRouter";
import { SolutionRouter } from "../Layout/SolutionRouter/SolutionRouter";
import { InquiryRouter } from "../Layout/InquiryRouter/InquiryRouter";
import NavBar from "../Common/NavBar/NavBar";
import Cart from "../Common/Cart/Cart";
export const router = createBrowserRouter([
  {
    element: (
      <>
        <NavBar />
        <Cart />
      </>
    ),
    children: [
      
      ProductRouter, SolutionRouter, InquiryRouter],
  },
]);
