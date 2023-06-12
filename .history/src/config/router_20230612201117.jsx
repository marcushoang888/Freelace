import { createBrowserRouter } from "react-router-dom";

import { ProductRouter } from "../Layout/ProductRouter/ProductRouter";
import { SolutionRouter } from "../Layout/SolutionRouter/SolutionRouter";
import { InquiryRouter } from "../Layout/InquiryRouter/InquiryRouter";

import RootLayout from "../Layout/RootLayout";
import { AboutRouter } from "../Layout/AboutRouter/AboutRouter";
export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <>Hello</> },
      ProductRouter,
      SolutionRouter,
      InquiryRouter,
      AboutRouter,
      Resou
    ],
  },
]);
