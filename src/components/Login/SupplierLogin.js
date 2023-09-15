import React, { useContext, useState } from 'react';
import {Switch,Route, BrowserRouter as Router, Redirect} from 'react-router-dom';


const SupplierLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [cSLogIn, setCSLogIn] = useState(false)

  const handleLogin = async () => {

    if (!email || !password) {
      console.log("Email and password are required.");
      return;
    }

    let parSLog = {
      "Email":email,
      "Password":password
    }
    

    try {
      // Send a POST request to your backend API to verify supplier login
      const response = await fetch('http://localhost:5117/api/Supplier/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parSLog),
      });

      let responseBody = await response.json()
      if (responseBody) {
        setCSLogIn(true)
        
        // console.log(responseBody, "Success Supplier");
      } else {

      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <>

    <Route path="/Supplier/Login" 
    render={() =>
      cSLogIn ? (
                <Redirect to="/Product/AddProduct" />
              ) : (
                <Redirect to="/Supplier/Login" />
              )
            }/>
    <div className='Logcontainer'>
      <h2>Supplier Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    </>
  );
};

export default SupplierLogin;
