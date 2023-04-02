import React, {useState} from 'react'

const CreateProductCard = () => {


    const [categoryDropDown, setCategoryDropDown] = useState(false);

    return (
        <>

            <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <form>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a New Product</h5>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required />
                    </div>



                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />




                    {/* category Select */}

                    <br/>
                    <div>
                        <button onClick={(e)=>setCategoryDropDown(!categoryDropDown)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select Category <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        
                        { categoryDropDown &&
                        < div id="dropdown" class=" absolute z-100 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LOP</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">COP</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LOP1</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">COP2</a>
                                </li>
                            </ul>
                        </div>
                        }

                    </div>



                    {/* Product Applications */}
                    <br />
                    <p class="font-normal text-gray-700 dark:text-gray-400">Product Applications </p>
                    <br />
                    <div class="mb-6">
                        <label for="Product_Application_1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Application 1</label>
                        <input type="text" id="Product_Application_1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Application 1" required />
                    </div>

                    <div class="mb-6">
                        <label for="Product_Application_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Application 2</label>
                        <input type="text" id="Product_Application_2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Application 2" />
                    </div>

                    <div class="mb-6">
                        <label for="Product_Application_3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Application 3</label>
                        <input type="text" id="Product_Application_3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Application 3" />
                    </div>


                    {/* Technical Features */}
                    <br />
                    <p class="font-normal text-gray-700 dark:text-gray-400">Technical Features</p>
                    <br />
                    <div class="mb-6">
                        <label for="Product_features_1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Technical features 1</label>
                        <input type="text" id="Product_features_1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Technical feature 1" required />
                    </div>

                    <div class="mb-6">
                        <label for="Product_features_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Technical features 2</label>
                        <input type="text" id="Product_features_2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Technical feature 2" />
                    </div>

                    <div class="mb-6">
                        <label for="Product_features_3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Technical features 3</label>
                        <input type="text" id="Product_features_3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Technical feature 3" />
                    </div>


                    {/* Product Advantages */}
                    <br />
                    <p class="font-normal text-gray-700 dark:text-gray-400">Advantages</p>
                    <br />
                    <div class="mb-6">
                        <label for="Product_advantages_1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Advantages 1</label>
                        <input type="text" id="Product_advantages_1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Advantages 1" required />
                    </div>

                    <div class="mb-6">
                        <label for="Product_advantages_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Advantages 2</label>
                        <input type="text" id="Product_advantages_2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Advantages 2" />
                    </div>

                    <div class="mb-6">
                        <label for="Product_advantages_3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Advantages 3</label>
                        <input type="text" id="Product_advantages_3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Advantages 3" />
                    </div>




                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Product</button>
                </form>
            </div>

        </>
    );
}

export default CreateProductCard