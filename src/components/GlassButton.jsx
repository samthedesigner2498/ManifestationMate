import React from 'react';

const GlassButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{
      backgroundImage: 'url(/assets/glass-button.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '90vw', // scaled down
      height: '12vh', // scaled down
      border: 'none',
      backgroundColor: 'transparent',
      color: '#fff',
      fontSize: '2vw',
      fontWeight: '500',
      marginBottom: '4vh',
      cursor: 'pointer',
      fontFamily: 'Pacifico', // ✅ consistent font
      // ❌ no textShadow
    }}>
      {label}
    </button>
  );
};

export default GlassButton;
