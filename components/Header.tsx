
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black text-xl">
          C
        </div>
        <span className="font-bold text-xl tracking-tight">charles.dev</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
        <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
        <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
        <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>
      <div className="text-xs glass px-4 py-2 rounded-full border border-white/20">
        Available for Hire
      </div>
    </header>
  );
};
