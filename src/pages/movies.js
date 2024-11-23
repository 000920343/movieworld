import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [actors, setActors] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('/api/movies');
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  
  const handleAddMovie = async () => {
    if (title && actors && releaseYear) {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, actors, releaseYear }),
      });

      if (response.ok) {
        const newMovie = await response.json();
        setMovies([...movies, newMovie]);
        setTitle('');
        setActors('');
        setReleaseYear('');

        
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); 
      }
    }
  };

 
  const handleDeleteMovie = async (id) => {
    const response = await fetch(`/api/movies/${id}`, { method: 'DELETE' });
    if (response.ok) {
      setMovies(movies.filter((movie) => movie._id !== id));
    }
  };

 
  const handleEditMovie = async (id) => {
    const movie = movies.find((movie) => movie._id === id);
    setTitle(movie.title);
    setActors(movie.actors.join(', '));
    setReleaseYear(movie.releaseYear);

    
    await fetch(`/api/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        actors: actors.split(','),
        releaseYear,
      }),
    });

    
    const response = await fetch('/api/movies');
    const data = await response.json();
    setMovies(data);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/backgroung3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        opacity: 1,
      }}
    >
      <Navbar />
      <div
        style={{
          flex: 1,
          padding: '2rem',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '0 3px 10px rgba(0, 0, 0, 0.8)', 
          }}
        >
          Movie List
        </h1>

        
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: '0.8rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '20%',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            placeholder="Actors (comma-separated)"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
            style={{
              padding: '0.8rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '30%',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            placeholder="Release Year"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            style={{
              padding: '0.8rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '15%',
              fontSize: '1rem',
            }}
          />
          <button
            onClick={handleAddMovie}
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
          >
            Add Movie
          </button>
        </div>

       
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 255, 255, 0.92)', 
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            padding: '2rem',
          }}
        >
          {movies.length === 0 ? (
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.2rem',
                color: '#555',
              }}
            >
              No movies found.
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {movies.map((movie) => (
                <li
                  key={movie._id}
                  style={{
                    marginBottom: '1rem',
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          margin: '0 0 0.5rem',
                          color: '#000',
                        }}
                      >
                        {movie.title}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          color: '#555',
                        }}
                      >
                        <strong>Actors:</strong> {movie.actors.join(', ')}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          color: '#555',
                        }}
                      >
                        <strong>Release Year:</strong> {movie.releaseYear}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleEditMovie(movie._id)}
                        style={{
                          padding: '0.5rem 1rem',
                          margin: '0 0.5rem',
                          backgroundColor: '#ffc107',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMovie(movie._id)}
                        style={{
                          padding: '0.5rem 1rem',
                          margin: '0 0.5rem',
                          backgroundColor: '#dc3545',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />

     
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>✅</span> Movie added successfully!
        </div>
      )}
    </div>
  );
};

export default Movies;
