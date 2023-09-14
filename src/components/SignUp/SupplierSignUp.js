import React, { useState } from 'react';

const SupplierSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [license, setLicense] = useState('');

  const handleSignup = async () => {
    try {
      let para = {
        "supplierName": name,
        "supplierEmail": email,
        "supplierPassword": password,
        "supplierPhone": phone,
        "address": address,
        "licenseNumber": license
      }


      const response = await fetch('http://localhost:5117/api/Supplier/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(para),
      });

      const responseBody = await response.json();
      console.log(responseBody);

      if (responseBody) {
        console.log(responseBody);
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
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="License Number"
        value={license}
        onChange={(e) => setLicense(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SupplierSignup;
