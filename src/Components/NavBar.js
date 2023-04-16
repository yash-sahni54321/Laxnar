import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import HamBurger from "../Icons/HamBurger";
import { BsSearch } from "react-icons/bs";
import logo from '../Images/laxnar_logo.png'

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
        <ol class="border border-gray-200 dark:border-gray-800 absolute w-full dark:bg-gray-900 p-3 shadow-lg rounded-b-2xl z-20">
          {links.map((link) => (
            <li>
              <NavLink
                className="h-11 px-5 w-full rounded-lg align-middle  border dark:hover:bg-blue-700 border-gray-200 text-white dark:border-gray-900 left-0 font-medium mt-1  py-1 flex justify-between p-4"
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
      </div> */}


      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center">
            <img src={logo}  className="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LAXNAR</span>
          </a>
          <div class="flex md:order-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Admin Login</button>
            <button onClick={() => setShowDropDown(!showDropDown)} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


              {links.map((link) => (
                <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={link.to}>{link.label}</NavLink>
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
