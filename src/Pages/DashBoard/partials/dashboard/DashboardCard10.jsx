import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

function DashboardCard10() {

  
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
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Products</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Product Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Category</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">features</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Date-Added</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                products.map(product => {
                  return (
                    <tr key={product.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full object-contain h-10" src={product.image[0]} width="40" height="40" alt={product.ProductName} />
                          </div>
                          <div className="font-medium text-slate-800">{product.category}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{product.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">24/03/2023</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">12</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
