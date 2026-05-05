import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🎬 New Production Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #111; color: #fff; padding: 30px; border-radius: 10px; border: 1px solid #333;">
          <h2 style="color: #00AEEF; border-bottom: 1px solid #333; padding-bottom: 10px; margin-top: 0;">New Quote Request</h2>
          
          <div style="margin-top: 20px;">
            <p><strong style="color: #888;">Name:</strong> <span style="font-size: 16px;">${name}</span></p>
            <p><strong style="color: #888;">Email:</strong> <span style="font-size: 16px;">${email}</span></p>
            <p><strong style="color: #888;">Service Type:</strong> <span style="font-size: 16px; background-color: #222; padding: 4px 8px; border-radius: 4px;">${service}</span></p>
          </div>
          
          <div style="margin-top: 30px; background-color: #000; padding: 20px; border-radius: 8px; border: 1px solid #222;">
            <p style="color: #888; margin-top: 0;"><strong>Project Description:</strong></p>
            <p style="line-height: 1.6; white-space: pre-wrap;">${description}</p>
          </div>
          
          <div style="margin-top: 30px; border-top: 1px solid #333; padding-top: 20px; font-size: 12px; color: #555; text-align: center;">
            This email was automatically sent from the Dreamaker Productions website.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email. Full error details:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
