import React from 'react';
import { Hero } from './components/sections/Hero';
import { Introduction } from './components/sections/Introduction';
import { Timeline } from './components/sections/Timeline';
import { Solution } from './components/sections/Solution';
import { Testimonial } from './components/sections/Testimonial';
import { CTASection } from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <Timeline />
      <Solution />
      <Testimonial />
      <CTASection />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}

export default App;