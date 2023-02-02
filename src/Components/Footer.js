import { BsFacebook, BsInstagram } from "react-icons/bs";
const Footer = () => {
  const number = "+91888888888";
  const email = "laxnar@gmail.com";
  return (
    <>
      <div className="bg-blue-400 text-white">
        <div className="text-center text-2xl p-3">
          <p className=" font-bold">
            Do you have any question about our product and services?
          </p>
          <p>
            Call us on {number} or email {email}
          </p>
        </div>

        <divc className="text-center text-3xl p-5 font-bold">
          <a href="#">
            <h1>LAXNAR</h1>
          </a>
        </divc>

        <div className="px-16 font-bold">
          <div className="border-b flex justify-evenly p-8">
            <span>
              <a href="#">Product</a>
            </span>
            <span>
              <a href="#">Technical Support</a>
            </span>
            <span>
              <a href="#">News</a>
            </span>
            <span>
              <a href="#">Contact</a>
            </span>
          </div>
        </div>

        <div className="text-center px-16">
          <div className=" border-b p-8">
            <p className="font-bold">E-Bulletin Subscription</p>
            <p>
              You can subscribe with your e-mail address in order to get to know
              news about our company.
            </p>
          </div>

          <div className=" p-8">
            <label
              for="input-group-1"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              Your Email
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-evenly p-3 font-bold">
          <div>
            <h3>LAXMI NARAYAN ENTERPRISES</h3>
          </div>
          <div>COPYRIGHT</div>
          <div className="">
            <button className="mr-2 bg-blue-500 py-2 px-3 text-xl rounded-md  ">
              <a href="#"><BsFacebook /></a>
            </button>
            <button className=" bg-blue-500 py-2 px-3 text-xl rounded-md">
              <a href="#"><BsInstagram /></a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
