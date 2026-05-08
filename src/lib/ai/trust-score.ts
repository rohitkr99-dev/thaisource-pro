import { callAI } from './index';

export interface TrustFactorData {
  vendorId: string;
  reviewAvg: number;
  reviewCount: number;
  avgResponseTimeHours: number;
  hasCertifications: boolean;
  isVerified: boolean;
  yearsOnPlatform: number;
}

export const calculateTrustScore = async (data: TrustFactorData) => {
  const prompt = `
    Calculate a composite Trust Score for this vendor on ThaiSource Pro.
    Weighting: Reviews (40%), Response Time (20%), Certifications (20%), Verification (20%).
    
    Vendor Performance Data:
    ${JSON.stringify(data, null, 2)}
    
    Return a JSON object with:
    - compositeScore: number (1-100)
    - tier: string (A, B, C, or D)
    - breakdown: { reviews: number, reliability: number, compliance: number }
    - trend: string (improving, stable, declining)
    - recommendationForBuyer: string
  `;

  return await callAI(prompt, "You are an AI trust and safety engine for an industrial marketplace.");
};
