import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import Error404Page from './Pages/Error404Page'
import React from 'react';
function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  //   <Router>
  //   <div className="App">
  //     <NavBar />
  //     <div className="content">
  //       <Switch>
  //         <Route exact path="/">
  //           <HomePage />
  //         </Route>
  //         <Route path="/product">
  //           <ProductPage/>
  //         </Route>
  //         <Route path="*">
  //           <Error404Page/>
  //         </Route>
  //       </Switch>
  //     </div>
  //   </div>
  // </Router>

  );
}

export default App;
