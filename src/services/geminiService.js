import { GoogleGenerativeAI } from '@google/genai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateGeminiResponse(prompt, context = '') {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    
    // Combine context and prompt if context exists
    const fullPrompt = context ? `Context:\n${context}\n\nPrompt:\n${prompt}` : prompt;
    
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw new error;
  }
}

export async function generateMultimodalResponse(prompt, images) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-vision' });
    
    // Convert images to parts array for multimodal input
    const parts = [
      { text: prompt },
      ...images.map(image => ({
        inlineData: {
          mimeType: 'image/jpeg',
          data: image.base64Data
        }
      }))
    ];
    
    const result = await model.generateContent(parts);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating multimodal response:', error);
    throw error;
  }
}