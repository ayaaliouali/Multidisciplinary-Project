import React from 'react'

const ContactUs = () => {
// Import Google Fonts in the component
React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Dancing+Script&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
        document.head.removeChild(link);
    };
}, []);

return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        paddingTop: '80px'
    }}>
        <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#C05263',
            fontFamily: "'Dancing Script', cursive"
        }}>
            ContactUs if you need to customize your gift
        </h1>
        <button
            style={{
                marginTop: '32px',
                backgroundColor: '#EDAF9E',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 32px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.2s',
                fontFamily: "'Crimson Text', serif"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#FFFAF0'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#EDAF9E'}
        >
            Send a message
        </button>
    </div>
)
}

export default ContactUs