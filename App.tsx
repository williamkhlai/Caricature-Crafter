import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { InputForm } from './components/InputForm';
import { ResultDisplay } from './components/ResultDisplay';
import { generateCaricature } from './services/geminiService';
import { SelectOption, AspectRatioOption } from './types';
import { 
  ACTIVITY_OPTIONS, 
  ASPECT_RATIO_OPTIONS,
  CLOTHING_OPTIONS,
  HAT_OPTIONS,
  GLASSES_OPTIONS,
  BACKGROUND_OPTIONS,
  SIGNATURE_STYLE_OPTIONS
} from './constants';
import { SpinnerIcon } from './components/icons/SpinnerIcon';
import { ErrorAlert } from './components/ErrorAlert';

type ErrorType = 'network' | 'api';

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [tagline, setTagline] = useState<string>('');
  const [activity, setActivity] = useState<SelectOption>(ACTIVITY_OPTIONS[0]);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioOption>(ASPECT_RATIO_OPTIONS[0]);
  const [clothing, setClothing] = useState<SelectOption>(CLOTHING_OPTIONS[0]);
  const [hat, setHat] = useState<SelectOption>(HAT_OPTIONS[0]);
  const [glasses, setGlasses] = useState<SelectOption>(GLASSES_OPTIONS[0]);
  const [background, setBackground] = useState<SelectOption>(BACKGROUND_OPTIONS[0]);
  const [signatureStyle, setSignatureStyle] = useState<SelectOption>(SIGNATURE_STYLE_OPTIONS[0]);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<ErrorType>('api');

  const handleGenerateClick = useCallback(async () => {
    if (!imageFile || !name || !tagline) {
      setError('Please upload an image and fill in all fields.');
      setErrorType('api');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const result = await generateCaricature(
        imageFile, 
        name, 
        tagline, 
        activity.value, 
        aspectRatio.value,
        clothing.value,
        hat.value,
        glasses.value,
        background.value,
        signatureStyle.value
      );
      if (result) {
        setGeneratedImage(`data:image/png;base64,${result}`);
      } else {
        setError('Failed to generate image. The API did not return an image.');
        setErrorType('api');
      }
    } catch (err) {
      console.error(err);
      let message = 'An unknown error occurred. Please try again.';
      let type: ErrorType = 'api';
      if (err instanceof Error) {
        if (err.message.toLowerCase().includes('failed to fetch')) {
          message = 'Please check your internet connection and try again.';
          type = 'network';
        } else {
          message = err.message;
        }
      }
      setError(message);
      setErrorType(type);
    } finally {
      setIsLoading(false);
    }
  }, [imageFile, name, tagline, activity, aspectRatio, clothing, hat, glasses, background, signatureStyle]);

  const canGenerate = imageFile && name.trim() && tagline.trim() && !isLoading;

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row md:items-start items-center gap-8">
        
        {/* Result Panel */}
        <div className="w-full md:w-1/2 lg:w-3/5 md:sticky md:top-28 animate-pop-in">
          <ResultDisplay isLoading={isLoading} generatedImage={generatedImage} />
        </div>

        {/* Control Panel */}
        <div className="w-full md:w-1/2 lg:w-2/5 bg-[#FFFCF5] rounded-2xl p-6 md:p-8 flex flex-col gap-8 h-fit animate-pop-in border-4 border-black cartoon-shadow">
          <h2 className="text-4xl font-display text-[#2A9D8F] text-center drop-shadow-sm">Craft Your Character!</h2>
          <ImageUploader 
            onImageUpload={setImageFile} 
            selectedAspectRatio={aspectRatio}
            onAspectRatioChange={setAspectRatio}
          />
          <InputForm
            name={name}
            setName={setName}
            tagline={tagline}
            setTagline={setTagline}
            activity={activity}
            setActivity={setActivity}
            clothing={clothing}
            setClothing={setClothing}
            hat={hat}
            setHat={setHat}
            glasses={glasses}
            setGlasses={setGlasses}
            background={background}
            setBackground={setBackground}
            signatureStyle={signatureStyle}
            setSignatureStyle={setSignatureStyle}
          />
          <button
            onClick={handleGenerateClick}
            disabled={!canGenerate}
            className={`w-full bg-[#E76F51] text-white font-extrabold text-xl py-4 px-6 rounded-xl border-4 border-black cartoon-shadow cartoon-button-press hover:bg-[#F4A261] transition-all duration-150 disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed disabled:shadow-none disabled:border-black disabled:opacity-60 disabled:transform-none flex items-center justify-center gap-2 ${canGenerate ? 'animate-wobble-hover' : ''}`}
          >
            {isLoading ? (
              <>
                <SpinnerIcon className="h-6 w-6" />
                <span>GENERATING...</span>
              </>
            ) : (
              'CREATE MY CARICATURE!'
            )}
          </button>
          {error && (
            <div className="mt-4">
              <ErrorAlert 
                message={error} 
                errorType={errorType} 
                onClose={() => setError(null)} 
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
