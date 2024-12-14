import React from 'react';
import { X, Play, Download } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div 
      className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#00001b]/95 p-8 rounded-lg max-w-4xl w-full border border-gold/20"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-gold hover:text-gold/80 transition">
            <X size={24} />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <img 
            src={movie.image} 
            alt={movie.title} 
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div>
            <h2 className="harry-potter-font text-4xl text-gold mb-4">{movie.title}</h2>
            <p className="cinzel text-gold/80 mb-2">Released: {movie.year}</p>
            <p className="cormorant text-white text-lg mb-8 leading-relaxed">
              {movie.summary}
            </p>
            
            <div className="flex gap-4">
              <a 
                href={`https://www.youtube.com/watch?v=${movie.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition cinzel"
              >
                <Play size={20} />
                Watch Trailer
              </a>
              <a 
                href={movie.ebookUrl}
                download
                className="flex items-center gap-2 bg-gold text-[#00001b] px-6 py-3 rounded-full hover:bg-gold/90 transition cinzel"
              >
                <Download size={20} />
                Download E-Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}