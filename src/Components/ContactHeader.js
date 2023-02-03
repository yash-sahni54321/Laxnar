
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { useState } from "react";
const ContactHeader = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text_msg, setText] = useState('');

  
    const handleSubmit = (e) => {
      e.preventDefault();
      const Message = { name, email, text_msg };
      console.log(Message)
    //   fetch('http://localhost:8000/blogs/', {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(blog)
    //   }).then(() => {
    //     // history.go(-1);
    //     history.push('/');
    //   }) 
    }

    return (
        <>
            <div className="flex justify-around p-8 bg-grey-400 ">
                <div className="">
                    <div className="p-3 mb-4 bg-white rounded-lg shadow-2xl">
                        <div className="text-center flex-col">
                            <span className="text-5xl w-full flex justify-center">
                                <MdLocationOn />
                            </span>
                            <span>
                                <p>Our Address</p>
                            </span>
                            <span>
                                <p>C-62, Sector M, Aliganj, Lucknow, Uttar Pradesh - 226024</p>
                            </span>
                        </div>
                    </div>
                    <div  className="flex justify-evenly p-3 ">
                        <div className=" w-6/12 mr-2 bg-white rounded-lg shadow-2xl">
                            <div className="text-center">
                                <span className="text-5xl  w-full flex justify-center">
                                    <MdEmail />
                                </span>
                                <span >
                                    <p>Laxnar@gmail.com</p>
                                </span>
                            </div>
                        </div>
                        <div className="w-6/12 ml-2 bg-white rounded-lg shadow-2xl">
                            <div className="text-center">
                                <span className="text-5xl w-full flex justify-center">
                                    <MdPhone />
                                </span>
                                <span>
                                    <p>+91 888888888</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-3 bg-white rounded-lg shadow-2xl">
                        <form onSubmit={handleSubmit} className="text-center">
                            <label className="">Contact Us</label>
                            <div className="flex justify-evenly">
                            <input
                                type="text"
                                className="bg-gray-50 border m-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="  Your Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                required
                                className="bg-gray-50 border m-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=" Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <textarea
                                required
                                className="bg-gray-50 border m-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={text_msg}
                                placeholder="  Message"
                                onChange={(e) => setText(e.target.value)}
                            />

                            <button className="rounded-md  px-3 py-2 bg-orange-400">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactHeader;
