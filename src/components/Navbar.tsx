import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
      <nav className="bg-[#00011B] sticky top-0 z-50 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
                src="https://www.harrypotter.com/assets/_next/static/images/logo-gold-600-7a7e89b6db1ffeaab025f2091d21b645.png"
                alt="Harry Potter Logo"
                className="h-14"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
              className="text-gold text-5xl lg:hidden focus:outline-none"
              onClick={() => setIsPopupOpen(true)}
          >
            ☰
          </button>

          {/* Links for Large Screens */}
          <div className="hidden lg:flex gap-12">
            <Link to="/" className="text-xl text-gold hover:text-gold/80 transition">
              Home
            </Link>
            <Link to="/characters" className="text-xl text-gold hover:text-gold/80 transition">
              Characters
            </Link>
            <Link to="/movies" className="text-xl text-gold hover:text-gold/80 transition">
              Movies
            </Link>
            <Link to="/deathly-hallows" className="text-xl text-gold hover:text-gold/80 transition">
              Deathly Hallows
            </Link>
          </div>
        </div>

        {/* Popup Menu */}
        {isPopupOpen && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
              <div className="bg-black text-center rounded-md shadow-lg p-6 max-w-xs w-full">
                <button
                    className="text-white text-3xl absolute top-4 right-4 focus:outline-none"
                    onClick={() => setIsPopupOpen(false)}
                >
                  ✕
                </button>
                <div className="flex flex-col gap-6">
                  <Link
                      to="/"
                      className="text-xl text-gold hover:text-gold/80 transition"
                      onClick={() => setIsPopupOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                      to="/characters"
                      className="text-xl text-gold hover:text-gold/80 transition"
                      onClick={() => setIsPopupOpen(false)}
                  >
                    Characters
                  </Link>
                  <Link
                      to="/movies"
                      className="text-xl text-gold hover:text-gold/80 transition"
                      onClick={() => setIsPopupOpen(false)}
                  >
                    Movies
                  </Link>
                  <Link
                      to="/deathly-hallows"
                      className="text-xl text-gold hover:text-gold/80 transition"
                      onClick={() => setIsPopupOpen(false)}
                  >
                    Deathly Hallows
                  </Link>
                </div>
              </div>
            </div>
        )}
      </nav>
  );
}
