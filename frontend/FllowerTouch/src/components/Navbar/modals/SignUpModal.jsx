import { useState } from 'react';

const SignUpModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Client-side password validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      console.log('Registration successful:', data);
      onClose(); // Close modal on success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#C05263',
          padding: '2rem',
          borderRadius: '12px',
          width: '400px',
          maxWidth: '90%',
          boxShadow: '0 4px 24px rgba(34,34,59,0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ color: '#f2e9e4', marginBottom: '1.5rem' }}>Sign Up</h2>
        {error && (
          <div style={{ color: '#ff4d4d', marginBottom: '1rem' }}>{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="name"
              style={{ color: '#f2e9e4', fontWeight: 500 }}
            >
              Name:
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#22223b', // Darker text for better contrast
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="email"
              style={{ color: '#f2e9e4', fontWeight: 500 }}
            >
              Email:
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#22223b',
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="password"
              style={{ color: '#f2e9e4', fontWeight: 500 }}
            >
              Password:
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#22223b',
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="confirmPassword"
              style={{ color: '#f2e9e4', fontWeight: 500 }}
            >
              Confirm Password:
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #c9ada7',
                  background: '#EDAF9E',
                  color: '#22223b',
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
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{
                background: '#f2e9e4',
                color: '#C06263',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1.2rem',
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;