import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Error404Page from "./Pages/Error404Page";
import ServicePage from "./Pages/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import React from "react";
import Footer from "./Components/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import GetCallPage from "./Pages/GetCallPage";

function App() {
    return (
<Router>
      <div className="App">
      <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route  path="/about">
              <AboutUsPage/>
            </Route>
            <Route path="/contact">
              <ContactUsPage/>
            </Route>
            <Route path="/service">
              <ServicePage/>
            </Route>
            <Route path="/product">
              <ProductPage/>
            </Route>
            <Route path="/productdetail/:id">
              <ProductDetailPage/>
            </Route>
            <Route path="/getcall">
              <GetCallPage/>
            </Route>
            <Route path="*">
              <Error404Page/>
            </Route>
            
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    );
}

export default App;
