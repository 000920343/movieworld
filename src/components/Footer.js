const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: '#000', // Set black color
          color: '#fff',
          textAlign: 'center',
          padding: '1rem 2rem',
          height: '60px', // Ensure consistent height with Navbar
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.9rem',
        }}
      >
        <p style={{ margin: 0 }}>
          © 2024 MovieWorld. All Rights Reserved. Contact us:{" "}
          <a
            href="mailto:support@movieworld.com"
            style={{ color: '#fff', textDecoration: 'underline' }}
          >
            support@movieworld.com
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  