import React, { useState } from 'react';
import { Movie } from '../data/movies';
import MovieModal from './MovieModal';

interface MovieCardProps extends Movie {}

export default function MovieCard(props: MovieCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        onClick={() => setShowModal(true)}
        className="card-hover cursor-pointer rounded-lg overflow-hidden bg-[#00001b]/80 text-white border border-gold/20"
      >
        <div className="relative">
          <img src={props.image} alt={props.title} className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00001b] to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className="harry-potter-font text-2xl text-gold mb-2">{props.title}</h3>
          <p className="cinzel text-gold/80">{props.year}</p>
        </div>
      </div>

      {showModal && (
        <MovieModal movie={props} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}