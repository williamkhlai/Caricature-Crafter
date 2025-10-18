import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#FFFCF5]/80 backdrop-blur-sm sticky top-0 z-10 border-b-4 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-24">
          <div className="flex items-center gap-4">
            <svg className="h-12 w-12 text-[#E76F51]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.553 1.42C12.808.675 11.83.25 10.82.25a4.42 4.42 0 0 0-3.125 1.313L3.25 6h5.253L13.553 1.42zM3.25 8l-3 3 7.5 7.5 3-3-7.5-7.5zM8.503 15.75l-4.5 4.5a.75.75 0 0 0 1.06 1.06l4.5-4.5-1.06-1.06zM22.75 6.425a.75.75 0 0 0-1.06-1.06L15.25 11.8l-1.47-1.47-3.528 3.528 2.528 2.528 4.998-4.998L22.75 6.425z" />
            </svg>
            <div className="flex flex-col text-center">
              <h1 className="text-5xl font-display text-[#2A9D8F]">
                Caricature <span className="text-[#E76F51]">Crafter</span>
              </h1>
              <p className="text-sm text-gray-600 -mt-1 font-semibold">Crafted by William Lai</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
