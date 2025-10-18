import React, { useState, useCallback, useRef } from 'react';
import { UploadIcon } from './icons/UploadIcon';
import { AspectRatioOption } from '../types';
import { ASPECT_RATIO_OPTIONS } from '../constants';

interface ImageUploaderProps {
  onImageUpload: (file: File | null) => void;
  selectedAspectRatio: AspectRatioOption;
  onAspectRatioChange: (ratio: AspectRatioOption) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, selectedAspectRatio, onAspectRatioChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select an image file.");
        onImageUpload(null);
        setPreview(null);
      }
    }
  }, [onImageUpload]);
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div 
        className={`w-full h-48 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 relative overflow-hidden bg-amber-50 border-4 border-dashed ${isDragging || preview ? 'border-amber-500 bg-amber-100' : 'border-amber-400'} hover:border-amber-500 hover:bg-amber-100/80`}
        onClick={handleUploadClick}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDrop={() => setIsDragging(false)}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        {preview ? (
          <img src={preview} alt="Image preview" className="max-h-full max-w-full object-contain rounded-md transition-all duration-300 animate-pop-in" />
        ) : (
          <div className="text-center text-amber-800/80 p-4">
            <UploadIcon className="mx-auto h-10 w-10 text-amber-500" />
            <p className="mt-2 font-extrabold">Click to upload or drag & drop</p>
            <p className="text-sm font-semibold">PNG, JPG, WEBP recommended</p>
          </div>
        )}
      </div>
      <div className="w-full">
        <label className="block text-lg font-bold text-center mb-2">
          Canvas Shape
        </label>
        <div className="grid grid-cols-3 gap-3 bg-amber-200/50 p-2 rounded-xl border-2 border-black">
          {ASPECT_RATIO_OPTIONS.map((ratio) => (
            <button
              key={ratio.value}
              type="button"
              onClick={() => onAspectRatioChange(ratio)}
              className={`px-3 py-2 rounded-lg text-sm font-extrabold transition-all duration-150 border-2 border-black cartoon-shadow cartoon-button-press ${
                selectedAspectRatio.value === ratio.value
                  ? 'bg-amber-400 text-white transform-none'
                  : 'bg-white text-black hover:bg-amber-200'
              }`}
            >
              {ratio.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};