import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

const Home = () => {
  const posters = Array.from({ length: 13 }, (_, i) => `/posters/poster${i + 1}.jpg`);

  return (
    <div>
      <Navbar />

      {/* Scrolling Posters Section */}
      <div
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: '#f0f0f0', // Light grey background
          padding: '1rem 0',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'scroll-left 40s linear infinite', // Smooth scrolling animation
          }}
        >
          {posters.map((poster, index) => (
            <Image
              key={index}
              src={poster}
              alt={`Movie Poster ${index + 1}`}
              width={200}
              height={300}
              style={{
                display: 'inline-block',
                margin: '0 1rem',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
          ))}

          {/* Duplicate posters for seamless scrolling */}
          {posters.map((poster, index) => (
            <Image
              key={`duplicate-${index}`}
              src={poster}
              alt={`Movie Poster Duplicate ${index + 1}`}
              width={200}
              height={300}
              style={{
                display: 'inline-block',
                margin: '0 1rem',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          position: 'relative',
          color: 'black',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/background2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3, // Light opacity for background
            zIndex: -1, // Place background behind content
          }}
        ></div>

        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Welcome to MovieWorld
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.5',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
            padding: '1rem',
            borderRadius: '10px',
            color: '#fff', // White text for readability
          }}
        >
          Your ultimate movie database management system! Browse, add, edit, and
          manage movies effortlessly.
        </p>
        <div>
          <Link href="/movies">
            <button
              style={{
                margin: '0 1rem',
                padding: '0.8rem 1.5rem',
                backgroundColor: '#0056b3', // Darker blue for button
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Browse Movies
            </button>
          </Link>
          <Link href="/about">
            <button
              style={{
                margin: '0 1rem',
                padding: '0.8rem 1.5rem',
                backgroundColor: '#c82333', // Darker red for button
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <Footer />

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        div[style*='scroll-left'] {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Home;
