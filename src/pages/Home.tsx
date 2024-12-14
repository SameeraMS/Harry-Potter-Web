import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wand2, Book, Castle, Sparkles, ScrollText } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div 
        className="h-screen relative"
        style={{
          backgroundImage: 'url("src/assets/images/hogwarts.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="harry-potter-font text-7xl mb-6 floating-animation">
              Welcome to Hogwarts
            </h1>
            <p className="cinzel text-2xl text-gold mb-8">
              Where Magic Begins
            </p>
            <div className="flex justify-center gap-6">
              <Link to="/characters" className="bg-gold/90 text-[#00001b] px-8 py-3 rounded-lg hover:bg-gold transition cinzel">
                Meet the Characters
              </Link>
              <Link to="/movies" className="border-2 border-gold text-gold px-8 py-3 rounded-lg hover:bg-gold/10 transition cinzel">
                Watch the Magic
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hogwarts Introduction */}
      <section className="gradient-bg py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="harry-potter-font text-4xl text-gold mb-6">The School of Witchcraft and Wizardry</h2>
              <p className="cormorant text-xl mb-6 leading-relaxed">
                Founded over a thousand years ago by four of the greatest wizards of the age: 
                Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin.
              </p>
              <div className="flex items-center gap-4">
                <Castle className="text-gold w-8 h-8" />
                <span className="cinzel text-lg">Established circa 990 A.D.</span>
              </div>
            </div>
            <div className="scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1583997052301-0042b33fc598?w=1200" 
                alt="Hogwarts Castle"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="gradient-bg py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-reveal bg-[#00001b]/80 p-8 rounded-lg border border-gold/20">
              <Wand2 className="text-gold w-12 h-12 mb-6" />
              <h3 className="harry-potter-font text-2xl text-gold mb-4">Magical Education</h3>
              <p className="cormorant text-lg">
                From Charms to Potions, discover the fascinating subjects taught at Hogwarts.
              </p>
            </div>
            <div className="scroll-reveal bg-[#00001b]/80 p-8 rounded-lg border border-gold/20">
              <Book className="text-gold w-12 h-12 mb-6" />
              <h3 className="harry-potter-font text-2xl text-gold mb-4">Magical Library</h3>
              <p className="cormorant text-lg">
                Access the extensive collection of magical books and manuscripts.
              </p>
            </div>
            <div className="scroll-reveal bg-[#00001b]/80 p-8 rounded-lg border border-gold/20">
              <Sparkles className="text-gold w-12 h-12 mb-6" />
              <h3 className="harry-potter-font text-2xl text-gold mb-4">Magical Artifacts</h3>
              <p className="cormorant text-lg">
                Explore powerful magical objects and their mysterious histories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Houses Section */}
      <section className="gradient-bg py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="harry-potter-font text-4xl text-gold mb-12">The Four Houses</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div key={'Gryffindor'} className="scroll-reveal bg-[#00001b]/80 p-6 rounded-lg border border-gold/20">
              <h3 className="cinzel text-xl text-gold mb-4">{'Gryffindor'}</h3>
              <img
                  src={`src/assets/images/griffindor.png`}
                  alt={'Gryffindor'}
                  className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div key={'Slytherin'} className="scroll-reveal bg-[#00001b]/80 p-6 rounded-lg border border-gold/20">
              <h3 className="cinzel text-xl text-gold mb-4">{'Slytherin'}</h3>
              <img
                  src={`src/assets/images/slytherin.png`}
                  alt={'Slytherin'}
                  className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div key={'Ravenclaw'} className="scroll-reveal bg-[#00001b]/80 p-6 rounded-lg border border-gold/20">
              <h3 className="cinzel text-xl text-gold mb-4">{'Ravenclaw'}</h3>
              <img
                  src={`src/assets/images/ravenclaw.png`}
                  alt={'Ravenclaw'}
                  className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div key={'Hufflepuff'} className="scroll-reveal bg-[#00001b]/80 p-6 rounded-lg border border-gold/20">
              <h3 className="cinzel text-xl text-gold mb-4">{'Hufflepuff'}</h3>
              <img
                  src={`src/assets/images/hufflepuff.png`}
                  alt={'Hufflepuff'}
                  className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}