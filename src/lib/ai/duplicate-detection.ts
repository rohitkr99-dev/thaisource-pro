import { callAI } from './index';

export interface VendorInfo {
  id: string;
  companyName: string;
  address: string;
  phone: string;
  email: string;
}

export const detectDuplicates = async (newVendor: VendorInfo, existingVendors: VendorInfo[]) => {
  const prompt = `
    Check if the following new vendor is a duplicate of any existing vendors in the system.
    Perform fuzzy matching on company names and detect similar addresses, phones, or emails.
    
    New Vendor:
    ${JSON.stringify(newVendor, null, 2)}
    
    Existing Vendors:
    ${JSON.stringify(existingVendors, null, 2)}
    
    Return a JSON object with:
    - isDuplicate: boolean
    - confidenceScore: number (0-100)
    - matchedVendorId: string | null
    - reasoning: string
  `;

  return await callAI(prompt, "You are a data integrity specialist for a B2B platform.");
};
