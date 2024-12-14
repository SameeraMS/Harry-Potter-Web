import React, { useState } from 'react';

interface CharacterCardProps {
  name: string;
  image: string;
  house: string;
  description: string;
}

export default function CharacterCard({ name, image, house, description }: CharacterCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div 
        onClick={() => setShowDetails(true)}
        className="card-hover cursor-pointer rounded-lg overflow-hidden bg-[#00001b] text-white"
      >
        <img src={image} alt={name} className="w-full h-72 object-cover" />
        <div className="p-4">
          <h3 className="harry-potter-font text-xl mb-2">{name}</h3>
          <p className="text-gold">{house}</p>
        </div>
      </div>

      {showDetails && (
        <div 
          className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 p-4"
          onClick={() => setShowDetails(false)}
        >
          <div 
            className="bg-[#00001b]/90 p-6 rounded-lg max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex gap-6">
              <img src={image} alt={name} className="w-64 h-64 object-cover rounded-lg" />
              <div>
                <h2 className="harry-potter-font text-3xl text-gold mb-4">{name}</h2>
                <p className="text-white mb-2">House: {house}</p>
                <p className="text-white">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}