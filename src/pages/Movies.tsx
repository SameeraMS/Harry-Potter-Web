import React from 'react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

export default function Movies() {
  return (
    <div className="min-h-screen gradient-bg py-16 px-4">
      <div className="container mx-auto">
        <h1 className="harry-potter-font text-4xl text-gold mb-12 text-center">Harry Potter Movies</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}