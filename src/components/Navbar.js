import Link from 'next/link';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#000', 
        color: '#fff',
        height: '60px', 
      }}
    >
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
        MovieWorld
      </h1>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
        }}
      >
        <Link href="/" legacyBehavior>
          <a
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ddd')}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
          >
            Home
          </a>
        </Link>
        <Link href="/movies" legacyBehavior>
          <a
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ddd')}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
          >
            Movies
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ddd')}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
          >
            About
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
