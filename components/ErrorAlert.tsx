import React from 'react';
import { ErrorIcon } from './icons/ErrorIcon';
import { NetworkErrorIcon } from './icons/NetworkErrorIcon';

type ErrorType = 'network' | 'api';

interface ErrorAlertProps {
  message: string;
  errorType: ErrorType;
  onClose: () => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, errorType, onClose }) => {
  const getIcon = () => {
    switch (errorType) {
      case 'network':
        return <NetworkErrorIcon className="h-6 w-6 mr-3 flex-shrink-0" />;
      case 'api':
      default:
        return <ErrorIcon className="h-6 w-6 mr-3 flex-shrink-0" />;
    }
  };

  const getTitle = () => {
    switch (errorType) {
      case 'network':
        return 'Network Error';
      case 'api':
      default:
        return 'Generation Error';
    }
  }

  return (
    <div 
      className="bg-red-200 border-4 border-black text-black p-4 rounded-xl shadow-md flex items-center justify-between transition-all duration-300 animate-pop-in cartoon-shadow" 
      role="alert"
    >
      <div className="flex items-center">
        {getIcon()}
        <div>
          <p className="font-extrabold">{getTitle()}</p>
          <p className="text-sm font-semibold">{message}</p>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="ml-4 text-black hover:bg-red-300 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-red-400"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
