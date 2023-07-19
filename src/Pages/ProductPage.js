import PageIntroHeader from "../Components/PageIntroHeader";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Productpage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ifCategoryLoading, setIfCategoryLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [dropDownFace, setDropDownFace] = useState("Select Category");
  const [selectedcategory, setSelectedCategory] = useState("");
  const [categoryDropDown, setCategoryDropDown] = useState(false);
  const [tempProductArray, setTempProductArray] = useState([]);

  const fetchProducts = () => {
    fetch("https://laxnar-lko.onrender.com/api/product/get-products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
        setTempProductArray(result.data);
        console.log(result.data);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));

    fetch("https://laxnar-lko.onrender.com/api/category/get-category", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setCategory(result.data);
        console.log(result.data);
        setIfCategoryLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filter = (categoryName) => {
    setProducts([]);
    setIsLoading(true);
    fetch(
      `https://laxnar-lko.onrender.com/api/product/product-category/${categoryName}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
        console.log(result.data);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  const reloadFuction = () => {
    window.location.reload(true);
  };

  return (
    <>
      <PageIntroHeader PageName={"Products"} />

      <div className="z-auto flex items-center align-middle py-10 md:hidden  items-centerborder-t border-gray-600 bg-gray-700 max-sm:px-5 px-28">
        <div className="w-full h-full">
          <button
            onClick={(e) => setCategoryDropDown(!categoryDropDown)}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="text-white bg-red-700  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            {dropDownFace}
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {categoryDropDown && (
            <div
              id="dropdown"
              class="   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700"
            >
              <ul
                class=" py-2 text-sm text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li
                  onClick={(e) => {
                    setSelectedCategory("All_products");
                    setCategoryDropDown(!categoryDropDown);
                    setDropDownFace("All Products");
                    reloadFuction();
                  }}
                  class="block px-4 py-2  hover:bg-gray-600 hover:text-white"
                >
                  All Products
                </li>
                {category.map((ele) => (
                  <li
                    onClick={(e) => {
                      setSelectedCategory(ele.category_name);
                      setCategoryDropDown(!categoryDropDown);
                      setDropDownFace(ele.category_name);
                      filter(ele.category_name);
                    }}
                    class="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
                  >
                    <a>{ele.category_name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-600 max-sm:px-5 px-28 flex flex-row bg-gray-50">
        <div
          className={
            ifCategoryLoading
              ? "h-80 hidden md:block m-4 drop-shadow-2xl w-1/4 bg-gray-800 rounded-lg border border-gray-600"
              : "h-fit hidden md:block m-4 drop-shadow-2xl w-1/4 bg-gray-800 rounded-lg border border-gray-600"
          }
        >
          {ifCategoryLoading ? (
            <div className="mx-auto h-full w-full items-center flex justify-center align-middle ">
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-6 h-6 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#FF0000"
                />
              </svg>
            </div>
          ) : (
            <ol className="w-full">
              <div
                className="w-full flex justify-between p-4 border-b border-gray-600 cursor-pointer"
                onClick={(e) => {
                  setSelectedCategory("All_products");
                  setCategoryDropDown(!categoryDropDown);
                  setDropDownFace("All Products");
                  reloadFuction();
                }}
              >
                <div className="font-semibold text-gray-50">All Products</div>
                <div className="w-1/4 h-full  flex justify-center align-middle items-end">
                  <svg
                    class="inline w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 128 128"
                    viewBox="0 0 128 128"
                    id="filter"
                  >
                    <path
                      fill="#808080"
                      d="M126.6,13.6v7.8L77.3,70.7v27.2l-26.5,19.2V70.7L1.4,21.4v-7.8c0-1.5,1.2-2.7,2.7-2.7h119.7
                  C125.3,10.9,126.6,12.1,126.6,13.6z"
                    ></path>
                  </svg>
                </div>
              </div>

              {category.map((c) => (
                <div
                  className="w-full flex justify-between p-4 border-b border-gray-600 cursor-pointer"
                  onClick={(e) => {
                    setSelectedCategory(c.category_name);
                    setCategoryDropDown(!categoryDropDown);
                    setDropDownFace(c.category_name);
                    filter(c.category_name);
                  }}
                >
                  <div className="font-semibold text-gray-50">
                    {c.category_name}
                  </div>
                  <div className="w-1/4 h-full  flex justify-center align-middle items-end">
                    <svg
                      className="inline w-4 h-4 text-gray-50"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 128 128"
                      viewBox="0 0 128 128"
                      id="filter"
                    >
                      <path
                        fill="#808080"
                        d="M126.6,13.6v7.8L77.3,70.7v27.2l-26.5,19.2V70.7L1.4,21.4v-7.8c0-1.5,1.2-2.7,2.7-2.7h119.7
                  C125.3,10.9,126.6,12.1,126.6,13.6z"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))}
            </ol>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-1 m-4 drop-shadow-2xl w-1/2  bg-gray-800 p-10 rounded-lg">
          {isLoading ? (
            <div className="mx-auto h-full w-full items-center flex justify-center align-middle bg-gray-100 ">
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-8 h-8 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#FF0000"
                />
              </svg>
            </div>
          ) : products.length === 0 ? (
            <span className="text-gray-500">
              No Products Available from the category
            </span>
          ) : (
            products.map((product) => (
              <Link key={product._id} to={`/productdetails/${product._id}`}>
                <Fade bottom>
                  <ProductCard product={product} />
                </Fade>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Productpage;
