
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIEstimate = async (serviceType: string, details: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful assistant for "Point On Total Clean Solutions", a cleaning and cleanout service. 
      A customer is asking for an estimate for: ${serviceType}. 
      Details provided: ${details}.
      
      Provide a professional, friendly response that:
      1. Acknowledges their specific needs.
      2. Explains how our team handles such tasks (mentioning professionalism and multicultural team).
      3. Provides a rough price range or explains why a site visit might be needed.
      4. Encourages them to message us on Facebook to book.
      
      Keep it concise and encouraging.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Estimation Error:", error);
    return "I'm having trouble calculating that right now. Please message us on Facebook for a direct quote!";
  }
};

export const getJobFitResponse = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an HR assistant for "Point On Total Clean Solutions". We are hiring for cleanout and cleaning roles.
      Key info: Flexible work, paid per job, multicultural team.
      Applicant question: ${question}
      
      Answer professionally and highlight the benefits of working with us.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Job Fit Error:", error);
    return "We'd love to discuss this with you. Please complete the application form!";
  }
};
