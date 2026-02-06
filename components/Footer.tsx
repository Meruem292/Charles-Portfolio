
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="mt-32 pt-16 border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            <div>
                <p className="text-xs opacity-50 font-bold uppercase tracking-widest">Get in touch</p>
                <p className="text-xl font-medium">www.charlesdev.com</p>
            </div>
          </div>
          
          <div className="text-sm opacity-50 space-y-1">
             <p>@charlespatrickcanlas</p>
             <p>09123456987</p>
          </div>
        </div>
        
        <div className="text-right text-sm opacity-50 space-y-1">
          <p>Blk D-1 Lot 1 San Luis 1</p>
          <p>Dasmarinas City, Cavite</p>
          <p>Philippines</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4">
        <p className="text-xs opacity-30">© 2024 Charles Patrick Canlas. All rights reserved.</p>
        <div className="flex gap-6 text-xs font-bold uppercase tracking-tighter opacity-50">
            <a href="#" className="hover:opacity-100">Github</a>
            <a href="#" className="hover:opacity-100">LinkedIn</a>
            <a href="#" className="hover:opacity-100">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
