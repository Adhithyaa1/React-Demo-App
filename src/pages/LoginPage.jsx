import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
const [phone, setPhone] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^\+[1-9]\d{7,14}$/;
  return phoneRegex.test(phone);
};

const handleLogin = () => {
  if (!phone) {
    setError('Phone number is required');
    return;
  }

  if (!isValidPhoneNumber(phone)) {
    setError(
      'Enter a valid international phone number (e.g. +254712345678)'
    );
    return;
  }

  // Mock success for any valid phone number - doesnt logout on refresh
  localStorage.setItem('isLoggedIn', 'true');
  navigate('/');
};


return (
<div style={{ maxWidth: 400, margin: '80px auto' }}>
<h2>Login</h2>
<input
type="text"
placeholder="+254712345678"
value={phone}
onChange={(e) => setPhone(e.target.value)}
style={{ width: '100%', padding: '8px' }}
/>
{error && <p style={{ color: 'red' }}>{error}</p>}
<button onClick={handleLogin} style={{ marginTop: '12px' }}>
Login
</button>
</div>
);
};


export default LoginPage;