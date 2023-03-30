import React, { useState } from "react";

const LoginCard = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(`ID: ${id}, Password: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md px-6 py-8  bg-white rounded-lg shadow-md bg-gradient-to-r from-cyan-700 to-violet-400">
        <h2 className="text-2xl font-bold text-center w-full text-white mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-white font-bold mb-2">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="border border-gray-400 p-2 w-full rounded-md"
              value={id}
              onChange={handleIdChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-400 p-2 w-full rounded-md"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
