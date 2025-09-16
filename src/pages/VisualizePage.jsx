import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';

const VisualizePage = () => {
  const [dreamText, setDreamText] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleGenerate = () => {
    const dummyImage = '/assets/generated-placeholder.jpg';
    setGeneratedImage(dummyImage);
  };

  const handleSave = () => {
    alert('Image saved!');
  };

  return (
    <BackgroundWrapper>
      <h2 style={{
        fontSize: '2vw',
        color: '#fff',
        fontFamily: 'Pacifico',
        marginBottom: '2vh'
      }}>
        Visualize Your Dream
      </h2>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        id="upload"
        onChange={handleUpload}
        style={{ display: 'none' }}
      />
      <label htmlFor="upload" style={{
        backgroundImage: 'url(/assets/glass-button.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '45vw',
        height: '8vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: '2vw',
        fontFamily: 'Pacifico',
        cursor: 'pointer',
        marginBottom: '2vh',
      }}>
        Upload Image
      </label>

      <textarea
        value={dreamText}
        onChange={(e) => setDreamText(e.target.value)}
        placeholder="Describe your dream scenario..."
        style={{
          width: '80vw',
          height: '12vh',
          padding: '2vh 2vw',
          fontSize: '2vw',
          fontFamily: 'Pacifico',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.3)',
          background: 'rgba(255,255,255,0.1)',
          color: '#fff',
          marginBottom: '2vh',
          resize: 'none',
        }}
      />

      <button onClick={handleGenerate} style={{
        backgroundImage: 'url(/assets/glass-button.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '45vw',
        height: '8vh',
        border: 'none',
        backgroundColor: 'transparent',
        justifyContent: 'center',
  alignItems: 'center',
        color: '#fff',
        fontSize: '2vw',
        fontFamily: 'Pacifico',
        cursor: 'pointer',
        marginBottom: '2vh',
      }}>
        Generate
      </button>

      {generatedImage && (
        <>
          <img src={generatedImage} alt="Generated" style={{ width: '80vw', marginBottom: '2vh' }} />
          <button onClick={handleSave} style={{
            backgroundImage: 'url(/assets/glass-button.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '40vw',
            height: '6vh',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#fff',
            fontSize: '2vw',
            fontFamily: 'Pacifico',
            cursor: 'pointer',
          }}>
            Save Image
          </button>
        </>
      )}
    </BackgroundWrapper>
  );
};

export default VisualizePage;
