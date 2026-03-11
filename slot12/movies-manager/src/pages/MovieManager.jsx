import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MovieProvider } from '../contexts/MovieContext';
import MovieForm from '../components/MovieForm';
import MovieTable from '../components/MovieTable';
import FilterBar from '../components/FilterBar';

const MovieManagerContent = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">
        🎬 Movie Management
      </h1>

      <FilterBar setFilteredMovies={setFilteredMovies} />

      <MovieForm />

      <MovieTable filteredMovies={filteredMovies} />
    </Container>
  );
};

const MovieManager = () => (
  <MovieProvider>
    <MovieManagerContent />
  </MovieProvider>
);

export default MovieManager;