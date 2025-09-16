import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();

  const subscribe = () => {
    alert('Subscription successful! Redirecting to Manifest Page.');
    navigate('/manifest');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Sign Up / Subscribe</h2>
      <button
        onClick={subscribe}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: 'purple',
          color: '#fff'
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
