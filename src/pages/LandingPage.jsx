import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

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
    fontFamily: 'Pacifico',
    color: '#fff',
  };

  const greetingStyle = {
    fontSize: '3vw',
    textAlign: 'center',
    marginBottom: '4vh',
  };

  const logoPlaceholderStyle = {
    width: '20vw',
    height: '20vh',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '12px',
    marginBottom: '6vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1vw',
    color: '#fff',
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
    marginBottom: '3vh',
  };

  return (
    <div style={pageStyle}>
      <h1 style={greetingStyle}>Welcome to ManifestationMate</h1>

      <div style={logoPlaceholderStyle}>
        Logo Placeholder
      </div>

      <button style={glassButtonStyle} onClick={() => navigate('/explore')}>
        Explore
      </button>

      <button style={glassButtonStyle} onClick={() => navigate('/manifest')}>
        Manifest
      </button>
    </div>
  );
};

export default LandingPage;
