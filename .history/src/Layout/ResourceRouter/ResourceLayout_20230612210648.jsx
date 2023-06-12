import { Outlet } from "react-router-dom";

export default function ResourceLayout() {
  return (
    <>
            <Header imgUrl={"/faq.webp"}/>

      <Outlet />
    </>
  );
}
