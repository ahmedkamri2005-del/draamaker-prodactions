import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const nvidia = createOpenAI({
  apiKey: "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",
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

async function main() {
  try {
    const result = await streamText({
      model: nvidia.chat('meta/llama-3.1-70b-instruct'),
      prompt: 'hello',
    });

    for await (const chunk of result.textStream) {
      process.stdout.write(chunk);
    }
  } catch (err) {
    console.error("ERROR:", err);
  }
}
main();
