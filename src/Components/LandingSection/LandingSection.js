import React from "react";
import "./LandingSection.css";
import Logo from "../../Images/logo2.png";
import Typical from "react-typical";

const LandingSection = () => {
    return (
        <>
            <div
                className="
                bg-[url('https://images.unsplash.com/photo-1631049780190-31c1f051a2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]
                bg-center
                relative
                md:h-screen
                h-96
                mt-16
                object-cover
            "
            >
                <div className='flex flex-row md:h-screen h-full w-full bg-gray-700 bg-opacity-80'>
                    {/* <div className="absolute mt-10 h-5/6 px-11 flex items-center max-md:justify-center text-white font-semibold text-2xl md:text-3xl md:ml-28">
                    LAXNAR
                </div> */}

                    <div id='clipSection' className='md:h-screen h-full bg-red-600 opacity-70 w-1/2 relative flex align-middle items-center'>
                        <div className='w-1/3 mx-auto'>
                            <img src={Logo} alt='logo Image' className='object-cover' />
                            <p className='font-medium text-lg mt-5 text-white'>We Build the Future</p>
                        </div>
                    </div>

                    {/* <div className=" flex-1 bottom-0 flex items-end -mb-1">
                    <img className="
                            w-full
                        "
                        src="https://arkel.b-cdn.net/Content/Images/triangle-01.svg" alt =""></img>
                </div> */}
                    <div className=' absolute w-1/3 md:right-20 right-14 top-1/3'>
                        <p className='font-semibold text-xs md:text-2xl mt-5 text-white'>
                            <Typical
                                steps={[
                                    "Building Trust through Quality solutions and Exceptional Technologies",
                                    20000,
                                    // 'Delivering Exceptional solutions to our Partners',
                                    // 20000,
                                    // 'Laxnar are the Leading Service Providers',
                                    // 20000,
                                    // 'Expert in Lift Industries',
                                    // 20000,
                                ]}
                                wrapper='p'
                                loop={Infinity}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingSection;
