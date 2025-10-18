import React from 'react';

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-center items-center" aria-label="Loading caricature preview">
      <div className="w-full max-w-[200px] aspect-[4/5] animate-pulse relative">
        {/* Easel legs */}
        <div className="absolute -bottom-2 left-4 w-4 h-16 bg-slate-300/80 rounded -rotate-12 transform-gpu"></div>
        <div className="absolute -bottom-2 right-4 w-4 h-16 bg-slate-300/80 rounded rotate-12 transform-gpu"></div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-10 bg-slate-300/80 rounded"></div>

        {/* Placeholder for art */}
        <div className="w-full h-full bg-slate-200 rounded-lg flex items-center justify-center relative z-10">
          <div className="w-1/2 aspect-square rounded-full bg-slate-300"></div>
        </div>
      </div>
      <div className="w-1/2 h-5 bg-slate-200 rounded mt-8 animate-pulse"></div>
      <div className="w-1/3 h-4 bg-slate-200 rounded mt-2 animate-pulse"></div>
    </div>
  );
};
