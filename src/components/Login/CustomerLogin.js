// CustomerLogin.js
import React, { useState } from 'react';

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    if (!email || !password) {
      console.log("Email and password are required.");
      return;
    }
    let logPar = {
      "customerEmail":email,
      "customerPassword":password
    }

    try {
      const response = await fetch('http://localhost:5117/api/Customer/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logPar),
      });

      let responseBody = await response.json();

      if (responseBody) {
        alert("Login Successful")
      } else {
        
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='Logcontainer'>
      <h2>Customer Login</h2>
      
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
  );
};

export default CustomerLogin;
