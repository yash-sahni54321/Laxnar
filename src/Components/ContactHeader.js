
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
            <div className="bg-blue-200">
                <div>
                    <div>
                        <div className="text-center">
                            <span className="text-5xl">
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
                    <div>
                        <div>
                            <div className="text-center">
                                <span className="text-5xl">
                                    <MdEmail />
                                </span>
                                <span>
                                    <p>Laxnar@gmail.com</p>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <span className="text-5xl">
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
                    <div>
                        <form onSubmit={handleSubmit} className="">
                            <label>Contact Us</label>
                            <input
                                type="text"
                                className="w-full rounded-sm shadow-sm inline-block shadow-black"
                                placeholder="Your Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                required
                                className="w-full rounded-sm shadow-sm inline-block shadow-black"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                required
                                className="w-full h-24 rounded-sm shadow-sm inline-block shadow-black"
                                value={text_msg}
                                placeholder="Message"
                                onChange={(e) => setText(e.target.value)}
                            />

                            <button className="rounded-md px-3 py-2 bg-blue-500">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactHeader;
