import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import HamBurger from "../Icons/HamBurger";
import { BsSearch } from "react-icons/bs";

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
      <div>
        <ol class="absolute w-full bg-gray-50 p-5 shadow-lg rounded-b-2xl z-20">
          {links.map((link) => (
            <li>
              <NavLink
                class="left-0 font-medium mt-1 px-2 py-1 flex justify-between p-4 border-b-2 border-gray-300"
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
      <nav class="px-2 py-2.5 relative  shadow w-full top-0 left-0 border-b z-20">
        <div class="flex container justify-between">
          <div class="flex md:order-2">
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              class="inline-flex md:hidden items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>
    </>
  );
};

export default NavBar;
