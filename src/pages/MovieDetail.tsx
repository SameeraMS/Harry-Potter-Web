import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import { Download, Play } from 'lucide-react';

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="min-h-screen gradient-bg py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-[#00001b]/90 rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img src={movie.image} alt={movie.title} className="w-full md:w-1/3 rounded-lg" />
            <div className="flex-1">
              <h1 className="harry-potter-font text-4xl text-gold mb-4">{movie.title}</h1>
              <p className="text-white mb-6">{movie.summary}</p>
              
              <div className="flex gap-4">
                <a
                  href={`https://www.youtube.com/watch?v=${movie.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg gap-2 bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition"
                >
                  <Play size={20} />
                  Watch Trailer
                </a>
                <a 
                  href={movie.ebookUrl}
                  download
                  className="flex items-center gap-2 bg-gold text-[#00001b] px-6 py-3 rounded-lg hover:bg-gold/90 transition"
                >
                  <Download size={20} />
                  Download eBook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}