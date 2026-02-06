
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ServiceSection } from './components/ServiceSection.tsx';
import { HowIWork } from './components/HowIWork.tsx';
import { Footer } from './components/Footer.tsx';
import { BlobBackground } from './components/BlobBackground.tsx';

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
