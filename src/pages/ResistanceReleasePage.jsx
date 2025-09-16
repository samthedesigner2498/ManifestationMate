import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>


const ResistanceRelease = () => {
  const navigate = useNavigate();
  const [resistance, setResistance] = useState('');

  const handleRelease = () => {
    // You can store or process the resistance input here
    console.log('Released:', resistance);
    navigate('/release-confirmation'); // Update as needed
  };

  const pageStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(/assets/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5vh 5vw',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    color: '#fff',
    fontSize: '2vw',
    textAlign: 'center',
    marginBottom: '4vh',
    fontFamily: 'Pacifico',
    
  };

  const inputStyle = {
    width: '80vw',
    height: '8vh',
    fontSize: '4vw',
    fontFamily: 'Pacifico',
    padding: '1vh 2vw',
    borderRadius: '12px',
    border: '2px solid rgba(255,255,255,0.6)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    marginBottom: '6vh',
    outline: 'none',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  };

  const glassButtonStyle = {
    width: '80vw',
    height: '8vh',
    border: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'url(/assets/glass-button.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#fff',
    fontSize: '2vw',
    fontFamily: 'Pacifico',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Release Resistance</h1>
      <input
        type="text"
        placeholder="What are you ready to release?"
        value={resistance}
        onChange={(e) => setResistance(e.target.value)}
        style={inputStyle}
      />
      <button style={glassButtonStyle} onClick={handleRelease}>
        Release
      </button>
    </div>
  );
};

export default ResistanceRelease;
