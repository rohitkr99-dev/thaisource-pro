import { callAI } from './index';

export interface VendorCapability {
  id: string;
  companyName: string;
  services: string[];
  province: string;
  rating: number;
  reviewCount: number;
}

export const getSupplierRecommendations = async (requirements: string, vendors: VendorCapability[]) => {
  const prompt = `
    Match the following buyer requirements to the list of available vendors in Thailand.
    Score them based on category match, location, rating, and historical performance.
    
    Buyer Requirements:
    ${requirements}
    
    Available Vendors:
    ${JSON.stringify(vendors, null, 2)}
    
    Return a JSON object with:
    - recommendations: Array<{ vendorId: string, companyName: string, score: number, reasoning: string }>
    - marketInsight: string (context about the specific industry in Thailand)
  `;

  return await callAI(prompt, "You are a Thai industrial supply chain consultant.");
};
