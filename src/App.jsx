import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import ManifestPage from './pages/ManifestPage';
import JournalPage from './pages/JournalPage';
import ResistanceReleasePage from './pages/ResistanceReleasePage';
import SignupPage from './pages/SignupPage';
import VisualizePage from './pages/VisualizePage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/manifest" element={<ManifestPage />} />
        <Route path="/journal" element={<JournalPage />} />
       <Route path="/resistancerelease" element={<ResistanceReleasePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/visualize" element={<VisualizePage />} />

      </Routes>
    </Router>
  );
}
