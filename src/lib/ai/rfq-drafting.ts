import { callAI } from './index';

export const draftRFQ = async (userInput: string) => {
  const prompt = `
    Based on the following user input, draft a professional Request for Quotation (RFQ) for the Thai industrial market.
    Suggest appropriate categories, quantity units, and realistic price ranges if possible.
    Support both Thai and English context.
    
    User Input:
    ${userInput}
    
    Return a JSON object with:
    - title: string
    - description: string
    - suggestedCategory: string
    - suggestedQuantity: number
    - suggestedUnit: string
    - keyRequirements: string[]
    - thaiTranslation: { title: string, description: string }
  `;

  return await callAI(prompt, "You are a professional procurement officer in Thailand.");
};
