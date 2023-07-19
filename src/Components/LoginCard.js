import React, { useState } from "react";
import { useHistory } from "react-router";

const LoginCard = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(false);

    const history = useHistory();
    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (id == "lxadmin" && password == "laxnar@2023") {
            setValid(true);
            history.push(`/admin`);
        } else {
            alert("Wrong Credentials Try Again !!");
        }
        // console.log(`ID: ${id}, Password: ${password}`);
    };

    const openGetCallPage = () => {};

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-blue-100'>
            <div className='max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700'>
                <h2 className='text-2xl font-bold text-center w-full text-white mb-6'>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <label htmlFor='id' className='block text-white font-bold mb-2'>
                            ID
                        </label>
                        <input
                            type='text'
                            id='id'
                            name='id'
                            className='border border-gray-400 p-2 w-full rounded-md'
                            value={id}
                            onChange={handleIdChange}
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='password' className='block text-white font-bold mb-2'>
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='border border-gray-400 p-2 w-full rounded-md'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <button
                        type='submit'
                        className='flex mx-auto text-white border-0 py-2 px-8 focus:outline-none bg-blue-600  hover:bg-indigo-600 rounded text-lg'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginCard;
