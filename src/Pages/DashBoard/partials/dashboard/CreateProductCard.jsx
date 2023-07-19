import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const CreateProductCard = () => {
  const data = {
    ProductName: "",
    category: "",
    description: "",
    applications: [],
    techicalFeatures: [],
    Advantages: [],
    productImage: null,
  };

  const [categoryDropDown, setCategoryDropDown] = useState(false);
  const [formData, setFormData] = useState(data);
  const [categoryArray, setCategoryArray] = useState([]);
  const [applicationsArray, setapplicationsArray] = useState({
    application1: "",
    application2: "",
    application3: "",
  });
  const [techicalFeaturesArray, setTechicalFeaturesArray] = useState({
    feature1: "",
    feature2: "",
    feature3: "",
  });
  const [advantagesArray, setAdvantagesArray] = useState({
    advantage1: "",
    advantage2: "",
    advantage3: "",
  });
  const [selectedcategory, setCategory] = useState("");
  const [dropDownFace, setDropDownFace] = useState("Select Category");
  const [successAlert, setSuccessAlert] = useState(false);

  const getCategory = () => {
    // const category = axios.get("https://laxnar-lko.onrender.com/api/category/get-category")
    //     .then(data => {console.log(data.data); setCategoryArray(data.data)})
    //     .catch(error => console.log(error));
    //     console.log(categoryArray.data);

    fetch("https://laxnar-lko.onrender.com/api/category/get-category", {
      // mode: 'no-cors',
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setCategoryArray(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect((e) => {
    // e.preventDefault();
    getCategory(e);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    setFormData(formData.applications.pop());
    setFormData(formData.applications.pop());
    setFormData(formData.applications.pop());
    setFormData(formData.applications.push(applicationsArray.application1));

    setFormData(formData.applications.push(applicationsArray.application2));

    setFormData(formData.applications.push(applicationsArray.application3));

    //features---------------------------------------

    setFormData(formData.techicalFeatures.pop());
    setFormData(formData.techicalFeatures.pop());
    setFormData(formData.techicalFeatures.pop());
    setFormData(formData.techicalFeatures.push(techicalFeaturesArray.feature1));

    setFormData(formData.techicalFeatures.push(techicalFeaturesArray.feature2));

    setFormData(formData.techicalFeatures.push(techicalFeaturesArray.feature3));

    //advantages---------------------------------------

    setFormData(formData.Advantages.pop());
    setFormData(formData.Advantages.pop());
    setFormData(formData.Advantages.pop());
    setFormData(formData.Advantages.push(advantagesArray.advantage1));

    setFormData(formData.Advantages.push(advantagesArray.advantage2));

    setFormData(formData.Advantages.push(advantagesArray.advantage3));

    setFormData({ ...formData, category: selectedcategory });
    console.log(formData);

    let file = formData.productImage;
    let newFormData = new FormData();
    newFormData.append("name", formData.ProductName);
    newFormData.append("description", formData.description);
    newFormData.append("image", file);
    newFormData.append("category", formData.category);
    formData.applications.map((application, ind) => {
      newFormData.append("applications", application);
    })
    formData.techicalFeatures.map((feature, ind) => {
      newFormData.append("technical_features", feature);
    })
    formData.Advantages.map((advantage, ind) => {
      newFormData.append("advantages", advantage);
    })
    // newFormData.append("applications", formData.applications);
    // newFormData.append("technical_features", formData.techicalFeatures);
    // newFormData.append("advantages", formData.Advantages);

    axios({
      url: "https://laxnar-lko.onrender.com/api/product/add-product",
      method: "POST",
      data: newFormData,
    }).then(
      (res) => {
        console.log(res);
        alert("Product Added Successfully");
      },
      (err) => {
        console.log(err);
        alert("Some Thing Went wrong while adding Product");
      }
    );
  };

  return (
    <>
      <div
        onClick={(e) => {
          if (categoryDropDown) {
            setCategoryDropDown(!categoryDropDown);
          }
        }}
        class="block w-full p-6  border  rounded-lg shadow bg-gray-800 border-gray-700 "
      >
        <form>
          <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
            Create a New Product
          </h5>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Name
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, ProductName: e.target.value })
              }
              value={formData.ProductName}
              type="text"
              id="name"
              class="  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Name"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Description
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              value={formData.description}
              type="text"
              id="name"
              class="border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Name"
              required
            />
          </div>

          <label
            class="block mb-2 text-sm font-medium  text-white"
            for="file_input"
          >
            Upload file
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, productImage: e.target.files[0] })
            }
            class="block w-full text-sm  border  rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
            id="file_input"
            type="file"
          />

          {/* category Select */}

          <br />
          <div>
            <button
              onClick={(e) => setCategoryDropDown(!categoryDropDown)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
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
                class=" absolute z-100  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-white "
                  aria-labelledby="dropdownDefaultButton"
                >
                  {categoryArray.map((ele) => (
                    <li
                      onClick={(e) => {
                        setCategory(ele.category_name);
                        setCategoryDropDown(!categoryDropDown);
                        setDropDownFace(ele.category_name);
                      }}
                      class="block px-4 py-2  hover:bg-gray-600 hover:text-white"
                    >
                      <a>{ele.category_name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Product Applications */}
          <br />
          <p class="font-normal text-white">Product Applications </p>
          <br />
          <div class="mb-6">
            <label
              for="Product_Application_1"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Application 1
            </label>
            <input
              onChange={(e) => {
                setapplicationsArray({
                  ...applicationsArray,
                  application1: e.target.value,
                });
              }}
              value={applicationsArray.application1}
              type="text"
              id="Product_Application_1"
              class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Application 1"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="Product_Application_2"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Application 2
            </label>
            <input
              onChange={(e) => {
                setapplicationsArray({
                  ...applicationsArray,
                  application2: e.target.value,
                });
              }}
              value={applicationsArray.application2}
              type="text"
              id="Product_Application_2"
              class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Application 2"
            />
          </div>

          <div class="mb-6">
            <label
              for="Product_Application_3"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Application 3
            </label>
            <input
              onChange={(e) => {
                setapplicationsArray({
                  ...applicationsArray,
                  application3: e.target.value,
                });
              }}
              value={applicationsArray.application3}
              type="text"
              id="Product_Application_3"
              class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Application 3"
            />
          </div>

          {/* Technical Features */}
          <br />
          <p class="font-normal text-white">Technical Features</p>
          <br />
          <div class="mb-6">
            <label
              for="Product_features_1"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Technical features 1
            </label>
            <input
              onChange={(e) => {
                setTechicalFeaturesArray({
                  ...techicalFeaturesArray,
                  feature1: e.target.value,
                });
              }}
              value={techicalFeaturesArray.feature1}
              type="text"
              id="Product_features_1"
              class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Technical feature 1"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="Product_features_2"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Technical features 2
            </label>
            <input
              onChange={(e) => {
                setTechicalFeaturesArray({
                  ...techicalFeaturesArray,
                  feature2: e.target.value,
                });
              }}
              value={techicalFeaturesArray.feature2}
              type="text"
              id="Product_features_2"
              class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Technical feature 2"
            />
          </div>

          <div class="mb-6">
            <label
              for="Product_features_3"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Technical features 3
            </label>
            <input
              onChange={(e) => {
                setTechicalFeaturesArray({
                  ...techicalFeaturesArray,
                  feature3: e.target.value,
                });
              }}
              value={techicalFeaturesArray.feature3}
              type="text"
              id="Product_features_3"
              class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Technical feature 3"
            />
          </div>

          {/* Product Advantages */}
          <br />
          <p class="font-normal text-white">Advantages</p>
          <br />
          <div class="mb-6">
            <label
              for="Product_advantages_1"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Advantages 1
            </label>
            <input
              onChange={(e) => {
                setAdvantagesArray({
                  ...advantagesArray,
                  advantage1: e.target.value,
                });
              }}
              value={advantagesArray.advantage1}
              type="text"
              id="Product_advantages_1"
              class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Advantages 1"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="Product_advantages_2"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Advantages 2
            </label>
            <input
              onChange={(e) => {
                setAdvantagesArray({
                  ...advantagesArray,
                  advantage2: e.target.value,
                });
              }}
              value={advantagesArray.advantage2}
              type="text"
              id="Product_advantages_2"
              class=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Advantages 2"
            />
          </div>

          <div class="mb-6">
            <label
              for="Product_advantages_3"
              class="block mb-2 text-sm font-medium  text-white"
            >
              Product Advantages 3
            </label>
            <input
              onChange={(e) => {
                setAdvantagesArray({
                  ...advantagesArray,
                  advantage3: e.target.value,
                });
              }}
              value={advantagesArray.advantage3}
              type="text"
              id="Product_advantages_3"
              class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product Advantages 3"
            />
          </div>

          <button
            onClick={(e) => submitForm(e)}
            type="submit"
            class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Create Product
          </button>
        </form>
      </div>
    </>
  );
};
export default CreateProductCard;
