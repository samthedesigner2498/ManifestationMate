import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundWrapper from '../components/BackgroundWrapper';
import GlassButton from '../components/GlassButton';

const ExplorePage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundWrapper>
      <GlassButton label="Visualize 🌠" onClick={() => navigate('/visualize')} />
      <GlassButton label="Journal 📓" onClick={() => navigate('/journal')} />
      <GlassButton label="Release Resistance 🧘" onClick={() => navigate('/resistancerelease')} />
    </BackgroundWrapper>
  );
};

export default ExplorePage;
