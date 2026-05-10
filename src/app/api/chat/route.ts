import { Resend } from 'resend';
import { openai } from '@ai-sdk/openai';
import { streamText, Message } from 'ai';

const resend = new Resend(process.env.RESEND_API_KEY);

// Create NVIDIA client using OpenAI compatible provider
const nvidia = openai('', {
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

const SYSTEM_PROMPT = `
You are a highly professional, expert producer and consultant for Dreamaker Productions, an Emmy Award-Winning Production & Locations Company based in Morocco.
Your primary goal is LEAD GENERATION.

STRICT RULES:
1. When a user asks a question, DO NOT answer their main question immediately.
2. Politely tell them you'd love to help, but first, you need to know:
   - Their Full Name
   - Their Email Address
   - The Service they need (e.g., Equipment, Locations, Full Production, Soundstages)
3. Ask for this information conversationally and naturally.
4. ONLY AFTER you have collected all 3 pieces of info, send them a confirmation and FULLY answer their original question.
5. If the user provides name + email + service in their message, acknowledge it warmly and answer their question immediately.

KNOWLEDGE BASE ABOUT DREAMAKER PRODUCTIONS:
- Identity: Emmy Award-Winning Production & Locations Company offering world-class scale, infrastructure, skills, efficiency, and economy.
- Key Commercial Advantage: 20% Cash Rebate for shooting in Morocco.
- Locations Offered: Cities & Medinas, Desert & Oasis, Mountains & Gorges.
- Studios & Built Environments: High-Tech Soundstages, Legendary Desert Studios, Integrated Production Hubs.
- Standing Sets / Backlots: Classical & Roman, Middle Eastern & Biblical, Ancient Egyptian, Custom Fabrication.
- Notable Credits: Aazaan, Agent Vinod, Black Angel, CIA Confidential, Daag, Dirty Angels, Flirt, The Garden of Aden.
- Global Clients: Netflix, National Geographic, History Channel, and many more.

Tone: Professional, cinematic, concise. Primary language is English, but always match the user language.
`;

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const result = await streamText({
    model: nvidia('meta/llama-3.3-70b-instruct'),
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ],
    temperature: 0.7,
    onFinish: async (event) => {
      // Check if all 3 lead fields are present to send email
      const fullConversation = [...messages, { role: 'assistant', content: event.text }]
        .map((m) => m.content)
        .join(' ');
        
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const hasEmail = emailRegex.test(fullConversation);
      const hasName = messages.some(
        (m) => m.role === 'user' && m.content.split(' ').length >= 2
      );
      const services = ['equipment', 'location', 'production', 'soundstage', 'studio', 'crew', 'talent'];
      const hasService = services.some((s) =>
        fullConversation.toLowerCase().includes(s)
      );

      if (hasEmail && hasName && hasService && messages.length <= 10) {
        const emailMatch = fullConversation.match(emailRegex);
        try {
          await resend.emails.send({
            from: 'Dreamaker AI <onboarding@resend.dev>',
            to: 'ahmed.kamri2005@gmail.com',
            subject: `🔥 New Lead from Website Chat`,
            html: `
              <h2>New Lead from the AI Chat!</h2>
              <p><strong>Detected email:</strong> ${emailMatch?.[0] || 'N/A'}</p>
              <p><strong>Conversation Context:</strong></p>
              <pre style="background:#111;color:#fff;padding:16px;border-radius:8px;">${fullConversation.slice(-500)}</pre>
            `,
          });
        } catch (emailErr) {
          console.error('Email send failed:', emailErr);
        }
      }
    },
  });

  return result.toDataStreamResponse();
}
