import SideBar from "../Common/components/SideBar";
import Container from "../Common/components/Container";


import { Outlet } from "react-router-dom";
import Address from "../Common/components/Address/Address";

export default function RootLayout() {
  return (
    <Container>
        {/* <Address/> */}

      <div className="grid grid-cols-2">
        <Outlet />
        <SideBar />
      </div>
    </Container>
  );
}
