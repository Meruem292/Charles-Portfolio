
import React from 'react';

export const BlobBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Gradient */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-orange-600/20 blur-[150px] rounded-full"></div>
      
      {/* Top Right Blob */}
      <div className="absolute top-[5%] right-[15%] w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
      <div className="absolute top-[2%] right-[10%] w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
      
      {/* Mid Right Large Yellow Glow */}
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute top-[45%] right-[5%] w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

      {/* Bottom Left Accents */}
      <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-blue-500/10 blur-[120px] rounded-full"></div>
      
      {/* Static Shapes as seen in layout */}
      <div className="absolute top-[20%] left-[45%] w-4 h-4 border border-white/20 rounded-full"></div>
      <div className="absolute top-[18%] left-[48%] w-2 h-2 bg-white/10 rounded-full"></div>
      
      {/* Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};
