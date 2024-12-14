import React, { useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import { characters } from '../data/characters';

export default function Characters() {
  const [displayCount, setDisplayCount] = useState(6);

  return (
    <div className="min-h-screen gradient-bg py-16 px-4">
      <div className="container mx-auto">
        <h1 className="harry-potter-font text-4xl text-gold mb-12 text-center">Magical Characters</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.slice(0, displayCount).map(character => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
        {displayCount < characters.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setDisplayCount(prev => prev + 6)}
              className="bg-gold text-[#00001b] px-8 py-3 rounded-lg hover:bg-gold/90 transition harry-potter-font"
            >
              See More Characters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}