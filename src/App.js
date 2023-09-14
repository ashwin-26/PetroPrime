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

//Login
import Login from "./components/LoginSingup/Login";
import Registration from "./components/LoginSingup/Registration"
import SupplierPage from "./components/LoginSingup/SupplierPage"
import CustomerPage from "./components/LoginSingup/CustomerPage"


const App = () => {

  const [user, setUser] = useState(null);

  const handleRegistration = (userData) => {
    // Implement registration logic and set the user state
    // For simplicity, we'll just set the user here
    setUser(userData);
  };

  const handleLogin = (userData) => {
    // Implement login logic and set the user state
    // For simplicity, we'll just set the user here
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };



  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        {/* <Router> */}
        <Route  exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        
        <Route component={Default}/>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Redirect to="/login" />
        )}
        <Route path="/register" exact>
          <Registration handleRegistration={handleRegistration} />
        </Route>
        <Route path="/login" exact>
          <Login handleLogin={handleLogin} />
        </Route>
        {user && user.type === 'supplier' ? (
          <Route path="/supplier" exact>
            <SupplierPage />
          </Route>
        ) : null}
        {user && user.type === 'customer' ? (
          <Route path="/customer" exact>
            <CustomerPage />
          </Route>
        ) : null}
        {/* </Router> */}
      </Switch>
     

    </React.Fragment>
  )
  }

  
  export default App;

