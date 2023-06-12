import { Outlet } from "react-router-dom";
import SideBar from "../../Pages/Product/components/SideBar";
import Container from "../../Util/Container";

export default function ProductLayout() {
  return (
    <>
    
    </>
    <Container>
      <div className="w-full lg:grid lg:grid-cols-4 lg:gap-7 relative">
        <Outlet />
        <SideBar />
      </div>
    </Container>
  );
}
