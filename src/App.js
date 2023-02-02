import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Error404Page from "./Pages/Error404Page";
import React from "react";
import Footer from "./Components/Footer";
import ContactHeader from "./Components/ContactHeader";
function App() {
    return (
        <div className='App'>
            <Footer/>
            <ContactHeader/>
        </div>
    );
}

export default App;
