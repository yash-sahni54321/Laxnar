import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Error404Page from "./Pages/Error404Page";
import React from "react";
function App() {
    return (
        <div className='App'>
            <Navbar />
            <h1 className='text-3xl text-white bg-red-600 font-bold underline'>Hello world!</h1>
        </div>
    );
}

export default App;
