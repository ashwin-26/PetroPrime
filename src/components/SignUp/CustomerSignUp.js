import React, { useState } from 'react';
import {Switch,Route, BrowserRouter as Router, Redirect} from 'react-router-dom';


const CustomerSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
  const [phone, setPhone] = useState(0)

  const [cSignUp, setCSignUp] = useState(false)
  const [route, setRoute] = useState(false)

  const handleSignup = async () => {
    try {
      let para = {
        "customerName": name,
        "customerEmail": email,
        "customerPassword": password,
        "customerPhone": phone
      }
      
      const response = await fetch('http://localhost:5117/api/Customer/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(para),
      });

      const responseBody = await response.json();
      

      if (responseBody) {
        // console.log("Signup suc\\\cessful");
        setCSignUp(true)
        setRoute(true)
        alert("Registration success")
      } else {
        // Handle signup error, display an error message
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <>
      <Route path="/Customer/Register" 
    render={() =>
      cSignUp ? (
                <Redirect to="/Customer/Login" />
              ) : (
                <Redirect to="/Customer/Register" />
              )
            }/>
    <div className='Logcontainer'>
      <h2>Customer Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
    </>
  );
};

export default CustomerSignup;
