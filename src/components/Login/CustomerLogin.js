// CustomerLogin.js
import React, { useState } from 'react';

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send a POST request to your backend API to verify customer login
      const response = await fetch('/api/customer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, handle redirection or state update
      } else {
        // Handle login error, display an error message
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
