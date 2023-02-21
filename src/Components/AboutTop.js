import React, { useState } from 'react'
import aboutus from '../Images/aboutus.png';
const AboutTop = () => {
    const iniContent = `We are Lucknow based elevator control panel manufacturer and whole electrical kit supplier. Since 2017, we have been successfully delivering elevator control panels to the northern region of India. Our company's foundation is built on the quality of our products and the solution support that we offer to our clients. Our goal is to make our products easy to install and provide higher safety measures to ensure the safety of our customers.

    Our elevator control panels are equipped with important technical features that make them stand out from the rest. One of the most important features of our control panels is password protection. This feature ensures that only authorized personnel have access to the control panel, thereby increasing the security of the elevator system.`;

    const finContent = `We are Lucknow based elevator control panel manufacturer and whole electrical kit supplier. Since 2017, we have been successfully delivering elevator control panels to the northern region of India. Our company's foundation is built on the quality of our products and the solution support that we offer to our clients. Our goal is to make our products easy to install and provide higher safety measures to ensure the safety of our customers. 
    Our elevator control panels are equipped with important technical features that make them stand out from the rest. One of the most important features of our control panels is password protection. This feature ensures that only authorized personnel have access to the control panel, thereby increasing the security of the elevator system.
    Another important feature of our control panels is their easy handling. Our panels are designed to be user-friendly, allowing even those who are not technically proficient to use them with ease. This is a crucial aspect, especially in emergency situations where quick and efficient action is required.
    In addition to these features, our control panels are compact in size, making them easy to install in a variety of settings. They are also pre-installed with parameters, which makes the installation process much simpler and more efficient. Furthermore, our panels are equipped with various safety measures, such as automatic overload protection, to ensure the safety of passengers and the longevity of the elevator system.
    We also offer on-call service to our customers, so that they can reach out to us in case of any technical issues. In addition, we also offer on-site service if required, to ensure that our customers receive the best possible support. Our team of experienced technicians is always available to offer their assistance and support, so that our customers can have peace of mind knowing that their elevator system is in good hands.`;


    const [readMore, setreadMore] = useState(iniContent);
    const [Read, setRead] = useState("Read More")

    const addContent = (val) => {
         val === "Read More" ? setreadMore(finContent) : setreadMore(iniContent)
         Read === "Read Less" ? setRead("Read More") : setRead("Read Less") 
    }
    return (
        <div className='flex-col sm:flex-row items-center inline-flex  text-black bg-white'>
            <div className='p-5 mx-5 flex-initial w-2/3'>
                <p className='text-3xl sm:text-5xl w-auto font-bold my-5 text-blue-500'>About Us</p>
                <p className='text-justify'>
                    {readMore}
                </p>
                <button className='bg-blue-500  px-2 py-1 text-white rounded-lg' onClick={() => { addContent(Read) }}>{Read}</button>
            </div>
            <div className='p-5 mx-5 sm:w-1/3 invisible w-0  sm:visible'>
                <div >
                    <img className='rounded-full ' src={aboutus} alt="aboutus" />
                </div>
            </div>
        </div>
    )
}

export default AboutTop