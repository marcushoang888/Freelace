import SideBar from "../Common/components/SideBar";
import Container from "../Common/components/Container";


import { Outlet } from "react-router-dom";
import Address from "../Common/components/Address/Address";

export default function RootLayout() {
  return (
    <Container>
        {/* <Address/> */}

      <div className="lg:grid   lg:grid-cols-4 lg:gap-10 relative">
        <Outlet />
        <SideBar />
      </div>
    </Container>
  );
}
