import React, { useState } from "react";
import LimitedTextarea from "./ui/LimitedTextArea";
import axios from "axios";

const GetcallForm = ({ productName }) => {
  const [productDetails, setProductDetails] = useState({
    product: productName,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitFormData = (e) => {
    e.preventDefault();
    console.log(productDetails);
    axios({
      url: "https://laxnar-lko.onrender.com/api/support/enquiry/sendEnquiry",
      method: "POST",
      data: {
        email: "laxnarservices@gmail.com",
        phoneNumber: productDetails.phone,
        productName: productDetails.product,
        category: "",
        name: productDetails.name,
        writtenMessage: productDetails.message,
        senderEmail: productDetails.email,
      },
    }).then(
      (res) => {
        console.log(res);
        alert("Enquiry Submitted");
      },
      (err) => {
        console.log(err);
        alert("Some Thing Went wrong while Form Submission");
      }
    );
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    if (name === "message") {
      let text = value;
      return setProductDetails((prevValue) => {
        return { ...prevValue, [name]: text };
      });
    }
    setProductDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  return (
    <div className=" mt-10 mb-8 bg-white w-4/5 mx-auto pt-3">
      <div className=" bg-white py-4 px-8 flex flex-col mx-auto space-y-2">
        <div className="w-full flex space-x-2">
          <div className="bg-white flex-1">
            <label className="leading-7 text-sm " for="Product">
              Product
            </label>
            <input
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="Product"
              type={productDetails.product}
              onChange={handleChange}
              name="product"
              value={productDetails.product}
            />
          </div>
          <div className="flex-1">
            <label className="leading-7 text-sm " for="Name">
              Your Name
            </label>
            <input
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="Name"
              type="text"
              value={productDetails.name}
              onChange={handleChange}
              name="name"
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full flex space-x-2">
          <div className="flex-1">
            <label className="leading-7 text-sm text-gray-600" for="username">
              Email
            </label>
            <input
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="username"
              type="email"
              value={productDetails.email}
              onChange={handleChange}
              name="email"
              placeholder="email"
            />
          </div>
          <div className="flex-1">
            <label className="leading-7 text-sm text-gray-600" for="password">
              Phone
            </label>
            <input
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="phone"
              value={productDetails.phone}
              onChange={handleChange}
              name="phone"
              type="tel"
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full  flex flex-col ">
          <label className="leading-7 text-sm " for="username">
            Message
          </label>
          <LimitedTextarea
            rows={5}
            cols={1}
            value={productDetails.message}
            limit={200}
            onChange={handleChange}
            name="message"
            placeHolder="Write something..."
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            className="flex mx-auto bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
            type="button"
            onClick={(e) => submitFormData(e)}
          >
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetcallForm;
