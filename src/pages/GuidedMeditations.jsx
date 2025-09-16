import React from 'react';
import NavPortal from '../components/NavPortal';


export default function GuidedMeditations() {
  const videoData = [
    { label: '10-Minute Guided Meditation for Overthinking & Anxiety', url: 'https://www.youtube.com/embed/7uRu1eWPSdU?start=16' },
    { label: '10-Minute Morning Meditation for Energy, Clarity & Flow', url: 'https://www.youtube.com/embed/Qpz8CUcJRQk' },
    { label: '10 Min Forest Meditation for Grounding & Renewal', url: 'https://www.youtube.com/embed/W69ag2hJOlQ' },
    { label: 'Nighttime Ritual for Cosmic Alignment', url: 'https://www.youtube.com/embed/QcifuI72Ol8?start=1' },
  ];

  const pageStyle = {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: 'url(/assets/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5vh 5vw',
    boxSizing: 'border-box',
    fontFamily: 'Pacifico',
    color: '#fff',
    overflowY: 'auto',
  };

  const headingStyle = {
    fontSize: '3vw',
    textAlign: 'center',
    marginBottom: '2vh',
  };

  const welcomeStyle = {
    fontSize: '2vw',
    textAlign: 'center',
    marginBottom: '6vh',
    maxWidth: '80vw',
    lineHeight: '1.5',
    textShadow: '0 0 5px rgba(0,0,0,0.3)',
  };

  const glassButtonStyle = {
    position: 'relative',
    minWidth: '40vw',
    maxWidth: '60vw',
    padding: '2vh 3vw',
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
    marginBottom: '6vh',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    textShadow: '0 0 5px rgba(0,0,0,0.5)',
    overflow: 'hidden',
    outline: 'none',
  };

  const shimmerStyle = {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '200%',
    height: '100%',
    background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
    animation: 'shimmer 0.6s ease',
    pointerEvents: 'none',
  };

  const iframeStyle = {
    width: '80vw',
    maxWidth: '900px',
    height: '45vw',
    maxHeight: '500px',
    border: 'none',
    borderRadius: '20px',
    marginBottom: '2vh',
    boxShadow: '0 0 20px rgba(255,255,255,0.2)',
  };

  return (
    <div style={pageStyle} role="main" aria-label="Guided meditations page">
      <NavPortal />
      <h1 style={headingStyle}>Guided Meditations</h1>
      <p style={welcomeStyle}>
        Welcome to your sanctuary. Choose a meditation below to realign, release, or receive. Each one is a portal—step in when you're ready.
      </p>

      {videoData.map((video, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <iframe
            src={video.url}
            title={video.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={iframeStyle}
            aria-label={`Meditation video: ${video.label}`}
          />
          <button
            style={glassButtonStyle}
            onClick={(e) => {
              const shimmer = document.createElement('div');
              Object.assign(shimmer.style, shimmerStyle);
              e.currentTarget.appendChild(shimmer);
              setTimeout(() => shimmer.remove(), 600);
              window.open(video.url.replace('/embed/', '/watch?v='), '_blank');
            }}
            aria-label={`Open meditation on YouTube`}
            onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.4)')}
            onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            Meditate
          </button>
        </div>
      ))}
    </div>
  );
}
