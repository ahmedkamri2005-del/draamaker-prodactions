import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.NVIDIA_API_KEY;
  const url = 'https://integrate.api.nvidia.com/v1/chat/completions';
  
  try {
    console.log('Testing NVIDIA with fetch...');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-70b-instruct',
        messages: [{ role: 'user', content: 'Say hello' }],
        stream: false
      })
    });
    
    const data = await response.json();
    return NextResponse.json({ 
        success: response.ok, 
        status: response.status,
        data 
    });
  } catch (error: any) {
    return NextResponse.json({ 
        success: false, 
        error: error.message 
    }, { status: 500 });
  }
}
