import { GoogleGenAI, Modality } from "@google/genai";

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

export const generateCaricature = async (
  imageFile: File,
  name: string,
  tagline: string,
  activity: string,
  aspectRatio: string,
  clothing: string,
  hat: string,
  glasses: string,
  background: string,
  signatureStyle: string,
): Promise<string | null> => {
    
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const imagePart = await fileToGenerativePart(imageFile);
  const nameInitial = name.charAt(0).toUpperCase();

  // Build dynamic parts of the prompt
  const clothingPromptPart = clothing === 'none'
    ? 'wearing the same clothing as in the provided photo'
    : `wearing ${clothing}`;

  const accessories: string[] = [];
  if (hat !== 'none') {
    accessories.push(hat);
  }
  if (glasses !== 'none') {
    accessories.push(glasses);
  }

  let appearancePrompt = `The person is ${clothingPromptPart}`;
  if (accessories.length > 0) {
    appearancePrompt += ` and ${accessories.join(' and ')}`;
  }
  appearancePrompt += '.';
  
  const backgroundPrompt = background === 'clean white' 
    ? "Clean white background with an abstract, soft shadow effect on the 'floor' for shading."
    : `The background is ${background}.`;
  
  const outputInstruction = background === 'clean white'
    ? "The final image must be a clean vector-style sketch with a completely white background. Do not add any other elements."
    : "The final image must be a clean vector-style sketch. Do not add any other elements besides the specified background."

  const prompt = `
    Create a thick line vector caricature sketch of the person in the provided photo.
    Key features:
    - **Style:** Arrogant, confident, and artistic feel. Big head, small body.
    - **Likeness:** Maintain the same facial characteristics as the photo without drastic changes.
    - **Appearance:** ${appearancePrompt}
    - **Action:** The person is ${activity}, looking full of confidence and enjoyment.
    - **Composition:** The person is sitting on a large, stylized initial text of the letter "${nameInitial}".
    - **Aspect Ratio:** The final image must have a ${aspectRatio} aspect ratio.
    - **Background:** ${backgroundPrompt}
    - **Art Details:** Use very thick, bold lines. Employ soft shadows on the character and subtle artistic touches to strengthen the style.
    - **Lighting:** Soft, professional studio lighting.
    - **Signature:** In the bottom center, add a signature of the name "${name}" in a ${signatureStyle} style. Just below it, add the tagline "${tagline}" in a complementary, smaller font.
    - **Output:** ${outputInstruction}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          imagePart,
          { text: prompt },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }
    return null;

  } catch (error) {
    console.error("Error generating caricature:", error);
    // Re-throw the original error so the UI layer can handle it appropriately.
    throw error;
  }
};