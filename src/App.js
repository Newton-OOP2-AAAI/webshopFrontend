//import React,{useState,useEffect} from "react";
import Home from "./pages/home"
import About from "./pages/about"
import Products from "./pages/products"
import Shop from "./pages/shop"
import Cart from "./pages/cart"
import Deets from "./pages/deets"
import ProductList from "./components/ProductList"
import logo from "./logo.svg";
import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import ShopSingle from "./pages/shop-single";

//import Axios from "axios";

function App() {
 // <EmployeeComponent/>;
 // return <Home />;
 return <BrowserRouter>
 <Switch>
   <Route exact path ="/"> <Home/> </Route>
   <Route path ="/about"> <About/> </Route>
   <Route path ="/products"> <Products/> </Route>
   <Route path ="/shop"> <Shop/> </Route>
   <Route path ="/shopSingle"> <ShopSingle/> </Route>
   <Route path ="/cart"> <Cart/> </Route>
   <Route path ="/deets"> <Deets/> </Route>
   <Route path ="/productlist"> <ProductList/> </Route>



 </Switch>
 
 </BrowserRouter>
}

export default App;
