import { Outlet } from "react-router-dom";
import SideBar from "../../Pages/Product/components/SideBar";

export default function ProductLayout() {
  return (
    <div className="w-full lg:grid lg:grid-cols-4 lg:gap-7 relative">
      <Outlet />
      <SideBar />
    </div>
  );
}
