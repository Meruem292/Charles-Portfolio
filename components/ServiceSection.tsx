
import React from 'react';

export const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <div className="relative group">
          <img 
            src="https://picsum.photos/id/2/800/600" 
            alt="Workspace" 
            className="rounded-[2.5rem] w-full aspect-video object-cover border border-white/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[2.5rem]"></div>
        </div>
      </div>
      
      <div className="order-1 md:order-2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Boost Your Digital Presence With Me
        </h2>
        <p className="text-lg opacity-60 leading-relaxed">
          From complex back-end architectures to seamless mobile experiences, I ensure every line of code serves your business goals.
        </p>
        <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-purple-400">
          <div className="w-12 h-[1px] bg-purple-400"></div>
          MY EXPERTISE
        </div>
      </div>
    </section>
  );
};
