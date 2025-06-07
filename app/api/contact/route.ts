import nodemailer from 'nodemailer';

import { config } from 'dotenv';
config({ path: '.env.local' }); // ✅ manually loads env vars

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SMTP_TO = process.env.SMTP_TO;

  console.log('SMTP_USER exists:', !!SMTP_USER);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: SMTP_TO,
      subject: `Message from ${name}`,
      text: `Email: ${email}\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error: any) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
