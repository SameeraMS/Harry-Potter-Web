import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Characters from './pages/Characters';
import DeathlyHallows from './pages/DeathlyHallows';
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#00001b]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/deathly-hallows" element={<DeathlyHallows />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;