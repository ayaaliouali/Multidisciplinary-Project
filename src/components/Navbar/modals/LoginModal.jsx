import { useState } from 'react';

const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: 2000
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#EDAF9E', padding: '2rem',
          borderRadius: '8px', width: '400px', maxWidth: '90%'
        }}
        onClick={e => e.stopPropagation()}
      >
        <h2 style={{ color: '#C05263' }}>Login</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('Login attempted:', { email, password });
          onClose();
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.5rem',
                border: '2px solid #C05263',
                borderRadius: '4px'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.5rem',
                border: '2px solid #C05263',
                borderRadius: '4px'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: 'white',
              color: '#C05263',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            <span style={{ color: '#C05263' }}>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;