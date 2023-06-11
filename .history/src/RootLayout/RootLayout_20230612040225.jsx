import SideBar from "../Common/components/SideBar";
import Container from "../Common/components/Container";


import { Outlet } from "react-router-dom";
import Address from "../Common/components/Address/Address";

export default function RootLayout() {
  return (
    <Container>
        {/* <Address/> */}

      <div className="h-[100vh] w-full lg:grid lg:grid-cols-4 gap-7">
        <Outlet />
        <SideBar />
      </div>
    </Container>
  );
}
