import React from 'react';
import { SelectOption } from '../types';
import { 
  ACTIVITY_OPTIONS,
  CLOTHING_OPTIONS,
  HAT_OPTIONS,
  GLASSES_OPTIONS,
  BACKGROUND_OPTIONS,
  SIGNATURE_STYLE_OPTIONS
} from '../constants';

interface InputFormProps {
  name: string;
  setName: (name: string) => void;
  tagline: string;
  setTagline: (tagline: string) => void;
  activity: SelectOption;
  setActivity: (activity: SelectOption) => void;
  clothing: SelectOption;
  setClothing: (clothing: SelectOption) => void;
  hat: SelectOption;
  setHat: (hat: SelectOption) => void;
  glasses: SelectOption;
  setGlasses: (glasses: SelectOption) => void;
  background: SelectOption;
  setBackground: (background: SelectOption) => void;
  signatureStyle: SelectOption;
  setSignatureStyle: (style: SelectOption) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ 
  name, setName, 
  tagline, setTagline, 
  activity, setActivity,
  clothing, setClothing,
  hat, setHat,
  glasses, setGlasses,
  background, setBackground,
  signatureStyle, setSignatureStyle
}) => {
  const selectClassName = "w-full px-4 py-3 border-4 border-black rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-amber-500/50 focus:border-amber-500 transition-all bg-white text-md font-semibold appearance-none bg-no-repeat bg-right pr-8";
  const selectStyle = { backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23422800' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' };
  
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <div>
          <label htmlFor="name" className="block text-md font-bold mb-1">
            Name (for signature)
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Alex Ray"
            className="w-full px-4 py-3 border-4 border-black rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-md font-semibold bg-amber-100"
          />
        </div>
        <div>
          <label htmlFor="tagline" className="block text-md font-bold mb-1">
            Tagline
          </label>
          <input
            type="text"
            id="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="e.g., Creative Genius"
            className="w-full px-4 py-3 border-4 border-black rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-md font-semibold bg-amber-100"
          />
        </div>
      </div>
       <div>
          <label htmlFor="signatureStyle" className="block text-md font-bold mb-1">
            Signature Style
          </label>
          <select
            id="signatureStyle"
            value={signatureStyle.value}
            onChange={(e) => {
              const selectedOption = SIGNATURE_STYLE_OPTIONS.find(opt => opt.value === e.target.value);
              if (selectedOption) {
                setSignatureStyle(selectedOption);
              }
            }}
            className={selectClassName}
            style={selectStyle}
          >
            {SIGNATURE_STYLE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      <div>
        <label htmlFor="activity" className="block text-md font-bold mb-1">
          Activity
        </label>
        <select
          id="activity"
          value={activity.value}
          onChange={(e) => {
            const selectedOption = ACTIVITY_OPTIONS.find(opt => opt.value === e.target.value);
            if (selectedOption) {
              setActivity(selectedOption);
            }
          }}
          className={selectClassName}
          style={selectStyle}
        >
          {ACTIVITY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="pt-4 border-t-4 border-dashed border-amber-300">
        <h3 className="text-xl font-display text-slate-600 mb-4 text-center">Customize Your Look</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <label htmlFor="clothing" className="block text-md font-bold mb-1">Clothing</label>
            <select id="clothing" value={clothing.value} onChange={(e) => setClothing(CLOTHING_OPTIONS.find(opt => opt.value === e.target.value)!)} className={selectClassName} style={selectStyle}>
              {CLOTHING_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="hat" className="block text-md font-bold mb-1">Hat</label>
            <select id="hat" value={hat.value} onChange={(e) => setHat(HAT_OPTIONS.find(opt => opt.value === e.target.value)!)} className={selectClassName} style={selectStyle}>
              {HAT_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="glasses" className="block text-md font-bold mb-1">Glasses</label>
            <select id="glasses" value={glasses.value} onChange={(e) => setGlasses(GLASSES_OPTIONS.find(opt => opt.value === e.target.value)!)} className={selectClassName} style={selectStyle}>
              {GLASSES_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>
           <div>
            <label htmlFor="background" className="block text-md font-bold mb-1">Background</label>
            <select id="background" value={background.value} onChange={(e) => setBackground(BACKGROUND_OPTIONS.find(opt => opt.value === e.target.value)!)} className={selectClassName} style={selectStyle}>
              {BACKGROUND_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};
