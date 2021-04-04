//import React,{useState,useEffect} from "react";
import Home from "./pages/home";
import About from "./pages/about"
import logo from "./logo.svg";
import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

//import Axios from "axios";

function App() {
 // <EmployeeComponent/>;
 // return <Home />;
 return <BrowserRouter>
 <Switch>
   <Route exact path ="/"> <Home/> </Route>
   <Route path ="/About"> <About/> </Route>
 </Switch>
 
 </BrowserRouter>
}

export default App;
