import React, { useState} from 'react';
import {Switch,Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";


import CustomerLogin from './components/Login/CustomerLogin';
import CustomerSignup from './components/SignUp/CustomerSignUp';
import SupplierLogin from './components/Login/SupplierLogin';
import SupplierSignup from './components/SignUp/SupplierSignUp';
import ProductForm from './components/ProductForm';



const App = () => {

  const [customerLoggedIn, setCustomerLoggedIn] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [supplierLoggedIn, setSupplierLoggedIn] = useState(false)
  const [supplierRegistration, setSupplierRegistration] = useState(false)




  
  const handleCustomerLogin = (loginResponse) => {
    // Check the response from the backend
    if (loginResponse === 'success') {
      setCustomerLoggedIn(true);
    } else {
      // Handle unsuccessful login here if needed
    }
  };

  const handleCustomerRegistration = (registrationResponse) => {
    // Check the response from the backend
    if (registrationResponse === 'success') {
      setRegistrationSuccess(true);
    } else {
      
    }
  };

  const handleSupplierLogin = (loginResponse) => {
    // Check the response from the backend
    if (loginResponse === 'success') {
      setSupplierLoggedIn(true);
    } else {
      // Handle unsuccessful login here if needed
    }
  };

  const handleSupplierRegistration = (registrationResponse) => {
    // Check the response from the backend
    if (registrationResponse === 'success') {
      setSupplierRegistration(true);
    } else {
      
    }
  };










  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        
        <Route  exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/Product/AddProduct" component={ProductForm}/>
        {/* <Route path="/Customer/Login" component={CustomerLogin} /> */}
        <Route
            path="/Customer/Login"
            render={() =>
              customerLoggedIn ? (
                <Redirect to="/" />
              ) : (
                <CustomerLogin onLogin={handleCustomerLogin} />
              )
            }
          />
      
          {/* <Route path="/Customer/Register" component={CustomerSignup} /> */}
          <Route
            path="/Customer/Register"
            render={() =>
              registrationSuccess ? (
                <Redirect to="/Customer/Login" />
              ) : (
                <CustomerSignup onRegistration={handleCustomerRegistration} />
              )
            }
          />
       
            <Route
            path="/Supplier/Login"
            render={() =>
              supplierLoggedIn ? (
                <Redirect to="/Product/AddProduct" />
              ) : (
                <SupplierLogin onLogin={handleSupplierLogin} />
              )
            }
          />
        
          {/* <Route path="/Customer/Register" component={CustomerSignup} /> */}
          <Route
            path="/Supplier/Register"
            render={() =>
              supplierRegistration ? (
                <Redirect to="/Supplier/Login" />
              ) : (
                <SupplierSignup onRegistration={handleSupplierRegistration} />
              )
            }
            
          />
        





{/* 
          <Route path="/Supplier/Login" component={SupplierLogin} />
          <Route path="/Supplier/Register" component={SupplierSignup} /> */}
         
     
      </Switch>
     

    </React.Fragment>
  )
  }

  
  export default App;

