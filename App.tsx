
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceSection } from './components/ServiceSection';
import { HowIWork } from './components/HowIWork';
import { Footer } from './components/Footer';
import { BlobBackground } from './components/BlobBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-purple-500/30">
      <BlobBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-20">
        <Header />
        
        <main className="mt-16 space-y-24">
          <Hero />
          <ServiceSection />
          <HowIWork />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
