
import React from 'react';

export const HowIWork: React.FC = () => {
  return (
    <section className="grid md:grid-cols-12 gap-12 items-end">
      <div className="md:col-span-6 glass p-10 md:p-14 rounded-[3rem] border border-white/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 blur-[80px]"></div>
        
        <h3 className="text-4xl font-bold mb-12">How I Build <br/>Great Products</h3>
        
        <div className="space-y-12">
          <div className="group">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity">01</span>
              <h4 className="text-xl font-bold">Research & Planning</h4>
            </div>
            <p className="opacity-50 text-sm leading-relaxed pl-8">
              Deep dive into user requirements and market research to define the perfect technical stack and roadmap for your project.
            </p>
          </div>
          
          <div className="group">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity">02</span>
              <h4 className="text-xl font-bold">Design & Development</h4>
            </div>
            <p className="opacity-50 text-sm leading-relaxed pl-8">
              Iterative building process with high focus on performance, scalability, and pixel-perfect UI across all devices.
            </p>
          </div>
        </div>
        
        {/* Animated cursor-like element as seen in the image */}
        <div className="absolute bottom-10 right-10 animate-bounce">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30L15.5 10L35 24.5L24.5 24.5L10 30Z" fill="url(#paint0_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="10" y1="10" x2="35" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F87171" />
                        <stop offset="1" stopColor="#818CF8" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
      </div>
      
      <div className="md:col-span-6">
         <img 
            src="https://picsum.photos/id/3/800/1200" 
            alt="Detailed Work" 
            className="rounded-[3rem] w-full h-[600px] object-cover border border-white/10 shadow-2xl"
          />
      </div>
    </section>
  );
};
