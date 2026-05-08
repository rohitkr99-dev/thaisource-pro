import { callAI } from './index';

export interface QuotationData {
  id: string;
  vendorName: string;
  price: number;
  currency: string;
  leadTime: string;
  notes?: string;
}

export const summarizeQuotations = async (quotations: QuotationData[]) => {
  const prompt = `
    Analyze and compare the following quotations for a B2B procurement request in Thailand.
    Extract key terms: price, lead time, MOQ, and payment terms if available in notes.
    Generate a summary table and highlight the best and worst offers.
    
    Quotations:
    ${JSON.stringify(quotations, null, 2)}
    
    Return a JSON object with:
    - summary: string
    - comparisonTable: Array<{ vendor: string, price: number, leadTime: string, highlights: string }>
    - bestOffer: { vendor: string, reason: string }
    - worstOffer: { vendor: string, reason: string }
    - savingsPotential: string
  `;

  return await callAI(prompt, "You are an expert procurement analyst specializing in the Thai industrial market.");
};
