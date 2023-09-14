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

  const [customerLoggedIn, setCustomerLoggedIn] = useState(false);
  const [customerSignedUp, setCustomerSignedUp] = useState(false);
  const [supplierLoggedIn, setSupplierLoggedIn] = useState(false);
  const [supplierSignedUp, setSupplierSignedUp] = useState(false);



  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        
        <Route  exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/Customer/Login" component={CustomerLogin} />
          <Route path="/Customer/Register" component={CustomerSignup} />
          <Route path="/Supplier/Login" component={SupplierLogin} />
          <Route path="/Supplier/Register" component={SupplierSignup} /> */}
          {customerLoggedIn || customerSignedUp ? (
          <Redirect to="/customer/products" />
        ) : (
          <>
            <Route path="/Customer/Login">
              <CustomerLogin
                onSuccess={() => setCustomerLoggedIn(true)}
              />
            </Route>
            <Route path="/Customer/Register">
              <CustomerSignup
                onSuccess={() => setCustomerSignedUp(true)}
              />
            </Route>
          </>
        )}
        {supplierLoggedIn || supplierSignedUp ? (
          <Redirect to="/" />
        ) : (
          <>
            <Route path="/Supplier/Login">
              <SupplierLogin
                onSuccess={() => setSupplierLoggedIn(true)}
              />
            </Route>
            <Route path="/Supplier/Register">
              <SupplierSignup
                onSuccess={() => setSupplierSignedUp(true)}
              />
            </Route>
          </>
        )}
        <Redirect to="/" />
     
      </Switch>
     

    </React.Fragment>
  )
  }

  
  export default App;

