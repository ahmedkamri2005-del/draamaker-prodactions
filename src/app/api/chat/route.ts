import { streamText, UIMessage, convertToModelMessages, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const nvidia = createOpenAI({
    apiKey: process.env.NVIDIA_API_KEY || 'mock_key',
    baseURL: 'https://integrate.api.nvidia.com/v1',
  });

  const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

  try {
    const { messages }: { messages: UIMessage[] } = await req.json();
    
    console.log(`[Chat API] Processing ${messages.length} message(s)...`);

    const result = await streamText({
      model: nvidia.chat('meta/llama-3.1-70b-instruct'),
      system: `You are a professional and welcoming senior production consultant for Dreamaker Productions.
IMPORTANT FIRST STEP: In your very first reply, you MUST politely ask the user for their Full Name, Email Address, and the Type of Work/Project they are looking for. Do NOT provide other assistance until you have gathered this information.
Once the user provides their Name, Email, and Project Type, you MUST immediately call the 'submitLead' tool to save their information.
After the tool is called successfully, continue the conversation naturally and assist them with their needs.`,
      messages: await convertToModelMessages(messages),
      // @ts-ignore
      maxSteps: 5,
      tools: {
        submitLead: tool({
          description: 'Submit a new lead containing the user\'s full name, email address, and the type of project they need.',
          parameters: z.object({
            fullName: z.string().describe('The full name of the user.'),
            emailAddress: z.string().email().describe('The email address of the user.'),
            projectType: z.string().describe('The type of work or project the user is interested in.'),
          }),
          // @ts-ignore
          execute: async ({ fullName, emailAddress, projectType }: { fullName: string, emailAddress: string, projectType: string }) => {
            console.log(`[Chat API] Tool submitLead called for: ${fullName} <${emailAddress}>`);
            
            try {
              await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: process.env.CONTACT_EMAIL || 'ahmed.kamri2005@gmail.com',
                subject: `New Lead from Dreamaker AI: ${fullName}`,
                html: `
                  <h2>New AI Chat Lead</h2>
                  <p><strong>Name:</strong> ${fullName}</p>
                  <p><strong>Email:</strong> ${emailAddress}</p>
                  <p><strong>Project Type:</strong> ${projectType}</p>
                `
              });
              return 'Lead submitted successfully! Check your email.';
            } catch (error) {
              console.error('[Chat API] Failed to send email:', error);
              return 'Failed to save lead information internally, but you can continue the chat.';
            }
          },
        }),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error(`[Chat API] Error:`, error.message);
    
    return new Response(JSON.stringify({ 
        error: error.message,
        details: error.responseBody || 'No details'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
