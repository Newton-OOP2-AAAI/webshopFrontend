//import React,{useState,useEffect} from "react";
import Home from "./pages/home"
import About from "./pages/about"
import Product from "./pages/Product"
import Shop from "./pages/shop"
import ProductList from "./components/ProductList"
import ProductDetails from "./pages/ProductDetails"
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShopSingle from "./pages/shop-single";
import React from "react"


function App() {

 return <BrowserRouter>
 <React.Fragment>
 <Switch>
   <Route exact path ="/"> <Home/> </Route>
   <Route path ="/about"> <About/> </Route>
   <Route exact path ="/product/:id" component={ProductDetails}></Route>

   <Route path ="/shop"> <Shop/> </Route>
   <Route path ="/shopSingle"> <ShopSingle/> </Route>
   <Route exact path ="/productlist"> <ProductList/> </Route>
   <Route exact path ="/productlist/:id"  component={ProductList}></Route>



 </Switch>
 </React.Fragment>
 </BrowserRouter>
}

export default App;
