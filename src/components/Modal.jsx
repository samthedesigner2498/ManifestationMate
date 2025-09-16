// src/components/Modal.jsx
import React from 'react';
import GlassButton from './GlassButton';

/*
  Simple inline-styled modal used for subscription prompts.
  File: src/components/Modal.jsx
*/
export default function Modal({ title, message, onClose, onManifest }) {
  return (
    <div style={{
      position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
      background:'rgba(0,0,0,0.6)', zIndex:1000, padding:'6vh 4vw'
    }}>
      <div style={{
        width:'100%', maxWidth:420, borderRadius:16, padding:20,
        background:'rgba(255,255,255,0.04)', boxShadow:'0 8px 30px rgba(0,0,0,0.5)', backdropFilter:'blur(6px)',
        color:'#fff'
      }}>
        <h3 style={{margin:'0 0 6px 0'}}>{title}</h3>
        <p style={{margin:'0 0 14px 0', color:'rgba(255,255,255,0.85)'}}>{message}</p>
        <div style={{display:'flex', gap:12}}>
          <GlassButton label="Manifest Now — Unlimited" onClick={() => { localStorage.setItem('mm_access', JSON.stringify({ mode: 'manifest', paid: true })); onManifest && onManifest(); }} />
          <GlassButton label="Maybe later — Keep exploring" onClick={onClose} style={{ background: 'rgba(255,255,255,0.06)', color:'#fff' }} />
        </div>
      </div>
    </div>
  );
}
