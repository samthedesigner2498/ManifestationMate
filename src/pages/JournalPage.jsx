import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { useLocation } from 'react-router-dom';

const JournalPage = () => {
  const location = useLocation();
  const isPaidUser = location.state?.isPaidUser || false;

  const [goals, setGoals] = useState([]);
  const [ticked, setTicked] = useState([]);

  const handleAdd = () => {
    if (!isPaidUser && goals.length >= 2) return;
    setGoals([...goals, '']);
  };

  const handleChange = (index, value) => {
    const updated = [...goals];
    updated[index] = value;
    setGoals(updated);
  };

  const handleTick = (index) => {
    setTicked([...ticked, index]);
  };

  return (
    <BackgroundWrapper>
      <h2 style={{
        fontSize: '2vw',
        color: '#fff',
        fontFamily: 'Pacifico',
        marginBottom: '2vh'
      }}>
        Journal Your Goals
      </h2>

      <button onClick={handleAdd} style={{
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
        marginBottom: '4vh',
      }}>
        Add
      </button>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2vw',
        justifyContent: 'center',
      }}>
        {goals.map((goal, index) => {
          const isTicked = ticked.includes(index);
          return (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1vh 1vw',
              width: '35vw',
              height: '15vh',
              fontSize: '2vw',
              fontFamily: 'Pacifico',
              color: '#fff',
              border: isTicked ? '2px solid #fff' : '1px solid rgba(255,255,255,0.3)',
              boxShadow: isTicked ? '0 0 12px rgba(255,255,255,0.6)' : 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}>
              <textarea
                value={goal}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Your goal..."
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '2vw',
                  fontFamily: 'Pacifico',
                  resize: 'none',
                }}
              />
              {!isTicked && (
                <button onClick={() => handleTick(index)} style={{
                  position: 'absolute',
                  right: '1vw',
                  bottom: '1vh',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '2vw',
                  cursor: 'pointer',
                }}>
                  ✅
                </button>
              )}
            </div>
          );
        })}
      </div>
    </BackgroundWrapper>
  );
};

export default JournalPage;
