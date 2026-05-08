import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
});

export const callAI = async (prompt: string, systemPrompt: string = "You are an AI procurement assistant for ThaiSource Pro, a B2B marketplace in Thailand.") => {
  let retries = 3;
  while (retries > 0) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
      });

      return JSON.parse(response.choices[0].message.content || "{}");
    } catch (error) {
      console.error(`AI call failed, retries left: ${retries - 1}`, error);
      retries--;
      if (retries === 0) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

export * from './quotation-summary';
export * from './supplier-recommendations';
export * from './vendor-risk-analysis';
export * from './rfq-drafting';
export * from './negotiation-suggestions';
export * from './duplicate-detection';
export * from './trust-score';
