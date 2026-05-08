import { callAI } from './index';

export interface NegotiationContext {
  rfqTitle: string;
  quotationPrice: number;
  marketAveragePrice?: number;
  vendorName: string;
  competitorPrices: number[];
}

export const getNegotiationSuggestions = async (context: NegotiationContext) => {
  const prompt = `
    Analyze this quotation against the market context in Thailand and suggest negotiation points.
    Identify leverage points (e.g., higher than average price, long lead time).
    
    Context:
    ${JSON.stringify(context, null, 2)}
    
    Return a JSON object with:
    - analysis: string
    - suggestedCounterOffer: number
    - leveragePoints: string[]
    - talkingPoints: string[]
    - strategy: string
  `;

  return await callAI(prompt, "You are a senior procurement negotiator with 20 years of experience in the Thai market.");
};
