import React, { useState } from 'react';

const SupplierSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Send a POST request to your backend API to create a supplier account
      const response = await fetch('/api/supplier/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Signup successful, handle redirection or state update
      } else {
        // Handle signup error, display an error message
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='Logcontainer'>
      <h2>Supplier Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SupplierSignup;
