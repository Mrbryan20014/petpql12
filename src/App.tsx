import React from 'react';
import { Heart, PawPrint, Mail } from 'lucide-react';
import AdoptionForm from './components/AdoptionForm';
import PetGallery from './components/PetGallery';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawPrint className="w-8 h-8" />
            <h1 className="text-4xl md:text-6xl font-bold">PetPal</h1>
          </div>
          <p className="text-xl md:text-2xl mt-4 max-w-2xl mx-auto">
            Find your perfect furry companion today!
          </p>
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            <Heart className="w-5 h-5" />
            Browse Pets
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section id="gallery" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Adorable Pets
          </h2>
          <PetGallery />
        </section>

        <section id="adopt" className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Adoption Application
          </h2>
          <AdoptionForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="w-6 h-6" />
                <h3 className="text-xl font-bold">PetPal</h3>
              </div>
              <p className="text-gray-400">
                Connecting loving homes with furry friends since 2017.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  adoptpetpal@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours (CET)</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 09:00 - 19:00</p>
                <p>Saturday: 10:00 - 18:00</p>
                <p>Sunday: 11:00 - 17:00</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2017 PetPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;