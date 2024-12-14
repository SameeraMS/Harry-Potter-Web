import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black/90 sticky top-0 z-50 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img 
            src="https://www.harrypotter.com/assets/_next/static/images/logo-gold-600-7a7e89b6db1ffeaab025f2091d21b645.png"
            alt="Harry Potter Logo"
            className="h-12"
          />
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="text-gold hover:text-gold/80 transition">Home</Link>
          <Link to="/characters" className="text-gold hover:text-gold/80 transition">Characters</Link>
          <Link to="/movies" className="text-gold hover:text-gold/80 transition">Movies</Link>
          <Link to="/deathly-hallows" className="text-gold hover:text-gold/80 transition">Deathly Hallows</Link>
        </div>
      </div>
    </nav>
  );
}