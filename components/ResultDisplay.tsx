import React, { useEffect, useState } from 'react';
import { SkeletonLoader } from './SkeletonLoader';

interface ResultDisplayProps {
  isLoading: boolean;
  generatedImage: string | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ isLoading, generatedImage }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (generatedImage) {
      // Use a timeout to allow the image to load before triggering the animation
      const timer = setTimeout(() => setShowImage(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShowImage(false);
    }
  }, [generatedImage]);

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'caricature-sketch.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="w-full aspect-square bg-[#FFFCF5] rounded-2xl flex items-center justify-center p-4 relative overflow-hidden border-4 border-black cartoon-shadow">
      {isLoading && <SkeletonLoader />}
      {!isLoading && !generatedImage && (
         <div className="text-center text-slate-500 p-8 select-none">
            <svg className="mx-auto h-32 w-32 text-gray-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M85 95V85H75L70 95H85Z" fill="#D2B48C"/>
                <path d="M15 95V85H25L30 95H15Z" fill="#D2B48C"/>
                <path d="M50 95V15H45L40 5H60L55 15H50Z" fill="#D2B48C"/>
                <rect x="10" y="10" width="80" height="70" rx="5" fill="#F5F5DC"/>
                <rect x="10" y="10" width="80" height="70" rx="5" stroke="#422800" strokeWidth="4"/>
            </svg>
            <p className="mt-4 font-display text-3xl text-gray-400">Your Art Appears Here!</p>
            <p className="text-sm text-gray-500 mt-1 font-semibold">Let's make some magic!</p>
        </div>
      )}
      {generatedImage && (
        <>
          <img 
            src={generatedImage} 
            alt="Generated Caricature" 
            className={`max-h-full max-w-full object-contain rounded-md shadow-lg transition-all duration-500 ease-in-out ${showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
          />
          <button 
            onClick={handleDownload}
            className={`absolute bottom-4 right-4 bg-[#2A9D8F] text-white font-bold py-3 px-5 rounded-xl border-4 border-black cartoon-shadow cartoon-button-press hover:bg-[#264653] transition-all duration-150 flex items-center gap-2 transform ${showImage ? 'opacity-100' : 'opacity-0'}`}
            title="Download Image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Download</span>
          </button>
        </>
      )}
    </div>
  );
};
