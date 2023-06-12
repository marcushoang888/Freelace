import Header from "../../Components/Header.jsx";
import Solution from "../../Pages/Solution/Solution.jsx";

export const SolutionRouter = {
  path: "/solution",
  element: (
    <>
       <Header imgUrl={'/solution.webp'}/>
      <Solution />
    </>
  ),
};
