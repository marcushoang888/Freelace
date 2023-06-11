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
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </div>
      </nav> */}

      <div className="drawer fixed top-0 left-0 right-0 z-50  text-white font-medium">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-black/20">
            <div className="flex-none lg:hidden">
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
            <div className="flex-1 px-2 mx-2">
              <img
                src="/logo.png"
                alt=""
                className={`transition-all duration-[0.4s] ${navHeight} `}
              />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <Banner />
      <Outlet />
    </>
  );
}
