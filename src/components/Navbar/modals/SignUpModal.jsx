import { useState } from 'react';

const SignUpModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


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
          backgroundColor: '#C05263', // dark background
          padding: '2rem',
          borderRadius: '12px',
          width: '400px',
          maxWidth: '90%',
          boxShadow: '0 4px 24px rgba(34,34,59,0.2)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <h2 style={{ color: '#f2e9e4', marginBottom: '1.5rem' }}>Sign Up</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('Signup attempted:', formData);
          onClose();
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#f2e9e4', fontWeight: 500 }}>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#f2e9e4'
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#f2e9e4', fontWeight: 500 }}>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#f2e9e4'
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#f2e9e4', fontWeight: 500 }}>
              Password:
              <input
                type="password"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#f2e9e4'
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#f2e9e4', fontWeight: 500 }}>
              Confirm Password:
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#f2e9e4'
                }}
              />
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                marginRight: '1rem',
                background: '#f2e9e4',
                color: '#C06263',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1.2rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                background: '#f2e9e4',
                color: '#C06263',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1.2rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;