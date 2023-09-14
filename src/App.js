import React, {Component, useState} from 'react';
import {Switch,Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from './components/Modal';

import CustomerLogin from './components/Login/CustomerLogin';
import CustomerSignup from './components/SignUp/CustomerSignUp';
import SupplierLogin from './components/Login/SupplierLogin';
import SupplierSignup from './components/SignUp/SupplierSignUp';

const App = () => {




  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        
        <Route  exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/customer/login" component={CustomerLogin} />
          <Route path="/Customer/Register" component={CustomerSignup} />
          <Route path="/supplier/login" component={SupplierLogin} />
          <Route path="/supplier/signup" component={SupplierSignup} />
     
      </Switch>
     

    </React.Fragment>
  )
  }

  
  export default App;

