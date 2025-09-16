import React from 'react';

const BackgroundWrapper = ({ children }) => {
  return (
    <div style={{
      backgroundImage: 'url(/assets/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '5vh',
      fontFamily: 'Pacifico', // ✅ consistent font
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
