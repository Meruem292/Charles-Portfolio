
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="grid md:grid-cols-12 gap-10 items-start">
      <div className="md:col-span-7 space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] gradient-text">
          I Build Scalable Applications For Your Future
        </h1>
        <p className="text-lg opacity-60 leading-relaxed max-w-md">
          Charles Patrick Canlas — a Full Stack Developer specialized in Web, Mobile, and AI integrations. Transforming ideas into high-performance digital products.
        </p>
        
        <div className="flex flex-wrap gap-3">
          {["Web Developer", "iOS/Android App", "Full Stack"].map((tag) => (
            <span key={tag} className="glass px-6 py-3 rounded-full text-sm font-semibold tracking-wide border border-white/10 hover:bg-white/10 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-5">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="https://picsum.photos/id/1/800/1000" 
            alt="Charles Portfolio" 
            className="relative rounded-[2.5rem] w-full h-[500px] object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
          />
          {/* Floating design elements like in the image */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-full blur-xl opacity-80 animate-pulse"></div>
          <div className="absolute bottom-8 -left-8 w-24 h-24 glass rounded-3xl flex items-center justify-center p-4">
             <div className="text-xs font-bold text-center">Software Hardware AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};
