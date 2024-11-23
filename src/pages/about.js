import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';

const About = () => {
  const contributors = [
    {
      name: 'Shubhampreet Singh',
      role: 'Frontend Developer',
      description: 'Worked on implementing UI and frontend functionality.',
      photo: '/photos/shubhampreet.jpg',
    },
    {
      name: 'Jaskaran Singh',
      role: 'Backend Developer',
      description: 'Handled API development and database integration.',
      photo: '/photos/jaskaran.jpg',
    },
    {
      name: 'Deepak Sharma',
      role: 'Full Stack Developer',
      description: 'Developed core features and overall app architecture.',
      photo: '/photos/deepak.jpg',
    },
    {
      name: 'Manmohik Chahal',
      role: 'Project Manager',
      description: 'Coordinated team efforts and ensured timely delivery.',
      photo: '/photos/manmohik.jpg',
    },
  ];

  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (index) => {
    if (flippedCard === index) {
      setFlippedCard(null); 
    } else {
      setFlippedCard(index); 
    }
  };

  return (
    <div>
      <Navbar />
      {}
      <div
        style={{
          backgroundImage: "url('/theater-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#333',
          textAlign: 'center',
          padding: '4rem 2rem',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: '1rem 0',
            color: '#000',
          }}
        >
          About MovieWorld
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: '120px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '1rem',
            borderRadius: '10px',
          }}
        >
          MovieWorld is a movie database management application designed to allow users to view, add, edit, and delete movie entries seamlessly. Built using Next.js, MongoDB, and Prisma for robust performance.
        </p>
      </div>

      
      <main style={{ padding: '2rem', backgroundColor: '#f7f9fc' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#333',
          }}
        >
          Meet Our Team!
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {contributors.map((contributor, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              style={{
                perspective: '1000px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                
                <div
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    padding: '1.5rem',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <Image
                    src={contributor.photo}
                    alt={contributor.name}
                    width={150}
                    height={150}
                    style={{ borderRadius: '50%' }}
                  />
                  <h3 style={{ color: '#333', margin: '1rem 0' }}>
                    {contributor.name}
                  </h3>
                  <p style={{ fontStyle: 'italic', color: '#666' }}>
                    {contributor.role}
                  </p>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>
                    {contributor.description}
                  </p>
                </div>

                
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={contributor.photo}
                    alt={contributor.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10%',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: '#fff',
                      padding: '1rem',
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <h3 style={{ margin: '0' }}>Hi, I am {contributor.name}!</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
