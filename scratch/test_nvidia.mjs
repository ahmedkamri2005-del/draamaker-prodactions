import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const nvidia = createOpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

async function test() {
  try {
    console.log('Testing NVIDIA API...');
    const { text } = await generateText({
      model: nvidia('meta/llama-3.1-70b-instruct'),
      prompt: 'Say hello',
    });
    console.log('Response:', text);
  } catch (error) {
    console.error('NVIDIA Error:', error);
    if (error.responseBody) {
        console.error('Response Body:', error.responseBody);
    }
  }
}

test();
