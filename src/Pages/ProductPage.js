import PageIntroHeader from "../Components/PageIntroHeader";
import { GoTriangleDown } from "react-icons/go";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const sideMenuOptions = [
  { option: "ARCUBE" },
  { option: "Lift Controller Cards" },
  { option: "ARCODE (Intregated Lift Control Unit)" },
  { option: "ARKEL IoT" },
  { option: "ADrive VVVF Inverter" },
  { option: "ARKEL IoT" },
];

const Productpage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://laxnar-lko.onrender.com/api/product/get-products", {
      // mode: 'no-cors',
      method: "GET",
      
    })
      .then((response) => response.json())
      .then((result) => {setProducts(result.data); console.log(result.data)})
      .catch((error) => console.log("error", error));

     axios({

       url: "http://localhost:4000/api/product/get-products",
       method: "GET",

     })
  
       // Handle the response from backend here
       .then((res) => { console.log(res) })
  
       // Catch errors if any
       .catch((err) => {console.log(err) });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <PageIntroHeader PageName={"Products"} />

      <div className="px-28 flex flex-row bg-green-50">
        <div className="hidden md:block m-4 drop-shadow-2xl h-fit w-1/4 bg-white">
          <ol className="w-full">
            {sideMenuOptions.map((options) => (
              <div className="w-full flex justify-between p-4 border-b border-gray-300">
                <div className="font-semibold text-gray-500">
                  {options.option}
                </div>
                <div className="w-1/4 flex justify-center items-end">
                  <GoTriangleDown />
                </div>
              </div>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 gap-4 flex-1 m-4 drop-shadow-2xl w-1/2 bg-white p-10">
          {products.map((product) => (
            <Link key={product._id} to={`/productdetail/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productpage;
