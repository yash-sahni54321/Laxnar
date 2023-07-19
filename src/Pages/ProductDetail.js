import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const history = useHistory();

    const [sigleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const fetchProducts = () => {
        fetch(`https://laxnar-lko.onrender.com/api/product/get-product/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);

                setSingleProduct(data.data[0]);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchProducts();
        window.scrollTo(0, 0);
    }, []);

    const openGetCallPage = () => {
        history.push(`/getcall/${sigleProduct.name}`);
    };

    return (
        <>
            {isLoading ? (
                <div className='mx-auto h-screen w-screen items-center flex justify-center align-middle '>
                    <svg
                        aria-hidden='true'
                        role='status'
                        class='inline w-8 h-8 mr-3 text-white animate-spin'
                        viewBox='0 0 100 101'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='#E5E7EB'
                        />
                        <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='#FF0000'
                        />
                    </svg>
                </div>
            ) : (
                <section class='text-gray-700 body-font overflow-hidden bg-white'>
                    <div class='container px-5 py-24 mx-auto'>
                        <div class='lg:w-4/5 mx-auto flex flex-wrap'>
                            <img
                                alt='ecommerce'
                                class='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
                                src={sigleProduct.image[0]}
                            />
                            <div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                                <h2 class='text-sm title-font text-gray-500 tracking-widest'>{sigleProduct.category}</h2>
                                <h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>{sigleProduct.name}</h1>
                                <div class='flex mb-4'>
                                    <span class='flex items-center'>
                                        <svg
                                            fill='currentColor'
                                            stroke='currentColor'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            class='w-4 h-4 text-red-500'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                                        </svg>
                                        <svg
                                            fill='currentColor'
                                            stroke='currentColor'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            class='w-4 h-4 text-red-500'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                                        </svg>
                                        <svg
                                            fill='currentColor'
                                            stroke='currentColor'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            class='w-4 h-4 text-red-500'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                                        </svg>
                                        <svg
                                            fill='currentColor'
                                            stroke='currentColor'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            class='w-4 h-4 text-red-500'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                                        </svg>
                                        <svg
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            class='w-4 h-4 text-red-500'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                                        </svg>
                                        <span class='text-gray-600 ml-3'>4 Reviews</span>
                                    </span>
                                    <span class='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
                                        <a class='text-gray-500'>
                                            <svg
                                                fill='currentColor'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                class='w-5 h-5'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                                            </svg>
                                        </a>
                                        <a class='ml-2 text-gray-500'>
                                            <svg
                                                fill='currentColor'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                class='w-5 h-5'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                                            </svg>
                                        </a>
                                        <a class='ml-2 text-gray-500'>
                                            <svg
                                                fill='currentColor'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                class='w-5 h-5'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                                <p class='leading-relaxed'>{sigleProduct.description}</p>
                                <div class='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'></div>
                                <div class='flex'>
                                    <span class='title-font font-medium text-2xl text-green-600'>In Stock</span>

                                    <button class='ml-10 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500'>
                                        <svg
                                            fill='currentColor'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            class='w-5 h-5'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className='flex mt-10'>
                                    <a href='https://docs.google.com/document/d/1X2lC1f6Atbp0-MfoV79BTqPAr4EpYaOZ/edit?usp=share_link&ouid=101730540961865689255&rtpof=true&sd=true'>
                                        <button class=' flex align-middle items-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'>
                                            <span class='relative top-0 left-0 flex h-3 w-3 mr-2'>
                                                <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                                                <span class='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
                                            </span>
                                            Download Brochure Now
                                        </button>
                                    </a>

                                    <button
                                        onClick={openGetCallPage}
                                        class='flex ml-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
                                    >
                                        Get Call Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=' w-4/5 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow mb-10 mx-auto'>
                        <a>
                            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>Applications</h5>
                        </a>
                        <ul>
                            {sigleProduct.applications.map((application, ind) => (
                                <li className=' mb-3 text-lg '>
                                    • {ind}
                                    {application}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div class='w-4/5 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow mb-10 mx-auto'>
                        <a>
                            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>Advantages</h5>
                        </a>
                        <ul>
                            {sigleProduct.advantages.map((advantages, ind) => (
                                <li className=' mb-3 text-lg '>• {advantages}</li>
                            ))}
                        </ul>
                    </div>

                    <div class='w-4/5 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow mb-10 mx-auto'>
                        <a>
                            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>Technical Features</h5>
                        </a>

                        <ul>
                            {sigleProduct.technical_features.map((technical_features, ind) => (
                                <li className=' mb-3 text-lg'>• {technical_features}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
};

export default ProductDetail;
