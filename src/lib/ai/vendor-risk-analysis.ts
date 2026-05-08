import { callAI } from './index';

export interface VendorRiskData {
  id: string;
  companyName: string;
  reviews: Array<{ rating: number, comment: string }>;
  responseRate: number;
  certifications: string[];
  foundedYear?: number;
}

export const analyzeVendorRisk = async (vendorData: VendorRiskData) => {
  const prompt = `
    Analyze the risk profile of this vendor on ThaiSource Pro.
    Evaluate review sentiment, response rate, certification validity, and age of company.
    Identify any red flags (e.g., suspicious review patterns).
    
    Vendor Data:
    ${JSON.stringify(vendorData, null, 2)}
    
    Return a JSON object with:
    - riskScore: number (1-100, where 100 is highest risk)
    - breakdown: { sentiment: string, reliability: string, compliance: string }
    - redFlags: string[]
    - recommendation: string
    - complianceCheck: string (specific to Thai industrial regulations)
  `;

  return await callAI(prompt, "You are a corporate risk auditor for Thai industrial markets.");
};
