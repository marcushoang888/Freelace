import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Banner from "./Banner";

export default function NavBar() {
  const [navHeight, setNavHeight] = useState(`h-[80px]`);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavHeight(`h-[60px]`);
      } else {
        setNavHeight(`h-[80px]`);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <nav className="   flex items-center justify-between px-10 py-2 ">
      
       
        <div className="">
        </div>
      </nav> */}

      <div className="drawer fixed top-0 left-0 right-0 z-50  text-white font-medium">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="flex w-full navbar justify-between bg-black/20">
            <div className="flex-none xl:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className=" px-2 mx-2">
              <img
                src="/logo.png"
                alt=""
                className={`transition-all duration-[0.4s] ${navHeight} `}
              />
            </div>
            <div className="flex hidden xl:block">
              <ul className=" menu menu-horizontal text-[16px] flex [&>li]:relative [&>li]:w-fit [&>li]:after:content-[''] [&>li]:after:block [&>li]:after:w-0 [&>li]:after:h-[3px] [&>li]:after:bg-white [&>li]:after:mx-auto hover:[&>li]:hover:after:w-full [&>li]:after:transition-all [&>li]:hover:transition-all [&>li]:after:duration-[0.8s] [&>li]:hover:duration-[0.8s]   [&>li]:after:absolute [&>li]:after:bottom-[-30%] uppercase [&>li>ul]:absolute [&>li>ul]:shadow-xl  [&>li>ul]:text-black [&>li>ul]:top-[150%] [&>li>ul]:bg-white [&>li>ul>li]:pl-6 [&>li>ul>li]:pr-2 [&>li>ul>li]:py-3  [&>li>ul]:flex-col   [&>li>ul]:text-sm hover:[&>li>ul>li]:hover:bg-black/20 [&>li>ul>li>a]:block [&>li>ul>li>a]:w-full p-0 ">
                <li>
                  <Link>Trang chủ</Link>
                </li>
                <li>
                  <Link>Giới thiệu</Link>
                </li>
                <li className="group  [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
                  <Link to="/products">Sản phẩm</Link>
                  <ul className="group-hover:transition-all group-hover:animate-change  group-hover:[&>ul]:opacity-100   group-hover:flex">
                    <li>
                      <Link>Chế phẩm sinh học, thuốc sáng trùng và tabs</Link>
                    </li>
                    <li>
                      <Link>Vắc xin sản xuất tại CNC</Link>
                    </li>
                    <li>
                      <Link>Vắc xin nhập khẩu</Link>
                    </li>
                  </ul>
                </li>
                <li className="group  [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
                  <Link to="/solution">Phòng thí nghiệm CNC</Link>
                  <ul className="group-hover:transition-all group-hover:animate-change  group-hover:[&>ul]:opacity-100   group-hover:flex">
                    <li>
                      <Link>Chẩn đoán xét nghiệm bệnh động vật</Link>
                    </li>
                    <li>
                      <Link>Kháng sinh đồ</Link>
                    </li>
                    <li>
                      <Link>Các phép thử PCR</Link>
                    </li>
                    <li>
                      <Link>Các phép thử ELISA</Link>
                    </li>
                    <li>
                      <Link>Các phép thử huyết thanh học khác</Link>
                    </li>
                    <li>
                      <Link>Phân lập vi sinh vật</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link>TIN TỨC</Link>
                </li>
                <li>
                  <Link>HĐ NGHIÊN CỨU</Link>
                </li>
                <li>
                  <Link>LIÊN HỆ</Link>
                </li>
              </ul>
            </div>

            <div className="px-3">
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className=" text-black menu  p-4 w-80 h-full bg-base-200 text-[16px] flex [&>li]:relative [&>li]:w-full  uppercase [&>li>ul]:absolute [&>li>ul]:shadow-xl  [&>li>ul]:text-black [&>li>ul]:top-[150%] [&>li>ul]:bg-white [&>li>ul>li]:pl-6 [&>li>ul>li]:pr-2 [&>li>ul>li]:py-3  [&>li>ul]:flex-col   [&>li>ul]:text-sm hover:[&>li>ul>li]:hover:bg-black/20 [&>li>ul>li>a]:block [&>li>ul>li>a]:w-full p-0 ">
            <li>
              <Link>Trang chủ</Link>
            </li>
            <li>
              <Link>Giới thiệu</Link>
            </li>
            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input className="w-10 h-full  line-clamp-none absolute right-0 hover:bg-" type="checkbox" name="my-accordion-2" defaultChecked />
                <Link to="/products" className="collapse-title   ">
                  Sản phẩm
                </Link>
                <ul className="collapse-content ">
                  <li className="">
                    <Link className="">Chế phẩm sinh học, thuốc sáng trùng và tabs</Link>
                  </li>
                  <li>
                    <Link>Vắc xin sản xuất tại CNC</Link>
                  </li>
                  <li>
                    <Link>Vắc xin nhập khẩu</Link>
                  </li>
                </ul>
              </div>
            </div>

            <li className="group  [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
              <Link to="/solution">Phòng thí nghiệm CNC</Link>
              <ul className="group-hover:transition-all group-hover:animate-change  group-hover:[&>ul]:opacity-100   group-hover:flex">
                <li>
                  <Link>Chẩn đoán xét nghiệm bệnh động vật</Link>
                </li>
                <li>
                  <Link>Kháng sinh đồ</Link>
                </li>
                <li>
                  <Link>Các phép thử PCR</Link>
                </li>
                <li>
                  <Link>Các phép thử ELISA</Link>
                </li>
                <li>
                  <Link>Các phép thử huyết thanh học khác</Link>
                </li>
                <li>
                  <Link>Phân lập vi sinh vật</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link>TIN TỨC</Link>
            </li>
            <li>
              <Link>HĐ NGHIÊN CỨU</Link>
            </li>
            <li>
              <Link>LIÊN HỆ</Link>
            </li>
          </ul>
        </div>
      </div>
      <Banner />
      <Outlet />
    </>
  );
}
