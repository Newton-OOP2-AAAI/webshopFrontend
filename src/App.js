//import React,{useState,useEffect} from "react";
import Home from "./pages/home"
import About from "./pages/about"
import Products from "./pages/products"
import Product from "./pages/Product"
import Shop from "./pages/shop"
import Deets from "./pages/deets"
import ProductList from "./components/ProductList"
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
   {/* <Route exact path ="/product/:id" component={Product}></Route> */}

   <Route path ="/shop"> <Shop/> </Route>
   <Route path ="/shopSingle"> <ShopSingle/> </Route>
   <Route path ="/deets"> <Deets/> </Route>
   <Route path ="/productlist"> <ProductList/> </Route>



 </Switch>
 </React.Fragment>
 </BrowserRouter>
}

export default App;
