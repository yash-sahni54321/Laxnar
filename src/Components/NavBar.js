import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import HamBurger from "../Icons/HamBurger";
import { BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";
import logo from "../Images/logo2.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Products" },
  { to: "/service", label: "Service" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  function NavDropDown() {
    return (
      <div className=" fixed w-full z-20 left-0 border-b">
        <ol class="border border-gray-800 absolute w-full bg-gray-900 p-3 shadow-lg rounded-b-2xl z-20">
          {links.map((link) => (
            <li>
              <NavLink
                className="h-11 px-5 w-full rounded-lg align-middle  border hover:bg-blue-700  text-white border-gray-900 left-0 font-medium mt-1  py-1 flex justify-between p-4"
                onClick={() => setShowDropDown(!showDropDown)}
                to={link.to}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <>
      {/* <nav class="px-2 py-2.5 relative  shadow w-full top-0 left-0 border-b z-20 bg-white">
        <div class="flex container justify-between">
          <div class="flex md:order-2">
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <HamBurger />
            </button>
          </div>

          <a class="ml-2.5 font-semibold text-2xl text-gray-600 body-font font-poppins flex items-center">
            LAXNAR
          </a>

          <div>
            <button
              type="button"
              class="inline-flex md:hidden items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <BsSearch />
            </button>
          </div>

          <div class="flex md:order-2 left-0  md:block">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Member Login
            </button>
          </div>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ol class="h-full flex p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              {links.map((link) => (
                <li>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>
      <div class={showDropDown ? "block" : "hidden"}>
        <NavDropDown />
      </div> */}

      <nav class="bg-gray-800 fixed w-full z-20 top-0 left-0 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/">
            <img src={logo} className="h-6 mx-3" alt="Flowbite Logo" />
          </NavLink>
          <div class="flex md:order-2">
            <NavLink to="/adminlogin">
              <button
                type="button"
                class="text-white   focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-red-600 hover:bg-red-700 focus:ring-red-800"
                onClick={(e) => setShowDropDown(false)}
              >
                Admin Login
              </button>
            </NavLink>
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {links.map((link) => (
                <li>
                  <NavLink
                    className="block py-2 pl-3 pr-4  rounded hover:underline    md:p-0 text-white  hover:text-white md:hover:bg-transparent "
                    to={link.to}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div class={showDropDown ? "block" : "hidden"}>
        <NavDropDown />
      </div>
    </>
  );
};

export default NavBar;
