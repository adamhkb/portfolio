import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// --- Manual .env loader (no dotenv) ---
function parseDotenv(content: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    // strip surrounding quotes if present
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key) out[key] = val;
  }
  return out;
}

function loadEnvFileManually() {
  if (process.env.__ENV_LOADED__) return;

  const candidates = ['.env.local', '.env.development.local', '.env'];
  const tried: string[] = [];
  let dir = process.cwd();

  for (let i = 0; i < 8; i++) {
    for (const name of candidates) {
      const p = path.join(dir, name);
      tried.push(p);
      if (fs.existsSync(p)) {
        const txt = fs.readFileSync(p, 'utf8');
        const parsed = parseDotenv(txt);
        Object.assign(process.env, parsed);
        process.env.__ENV_LOADED__ = '1';
        console.log('✅ Loaded env from:', p);
        // quick summary of keys found (masked)
        console.log('Keys loaded:', Object.keys(parsed));
        return;
      }
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  console.warn('⚠️ No env file found. Tried:', tried);
}

if (process.env.NODE_ENV !== 'production') {
  console.log('CWD:', process.cwd());
  try { console.log('Dir entries:', fs.readdirSync(process.cwd()).slice(0, 30)); } catch {}
  loadEnvFileManually();
}

function need(name: string) {
  const val = process.env[name];
  if (!val) throw new Error(`Missing env var: ${name}`);
  return val;
}

export async function POST(req: Request) {
  try {
    if (process.env.NODE_ENV !== 'production') loadEnvFileManually();

    const { name, email, message } = await req.json();

    const SMTP_USER = need('SMTP_USER');
    const SMTP_PASS = need('SMTP_PASS');
    const SMTP_TO = process.env.SMTP_TO || SMTP_USER;
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = Number(process.env.SMTP_PORT || 465);

    console.log('SMTP presence (pre-send):', {
      USER: !!SMTP_USER, PASS: !!SMTP_PASS, TO: !!SMTP_TO, HOST: !!SMTP_HOST, PORT: !!SMTP_PORT,
    });

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: SMTP_TO,
      subject: `Message from ${name}`,
      text: `Email: ${email}\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Email send error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error?.message || 'Send failed' }),
      { headers: { 'Content-Type': 'application/json' }, status: 500 }
    );
  }
}

export async function GET() {
  if (process.env.NODE_ENV !== 'production') loadEnvFileManually();
  return new Response(
    JSON.stringify(
      {
        runtime: 'nodejs',
        cwd: process.cwd(),
        env: {
          SMTP_USER: !!process.env.SMTP_USER,
          SMTP_PASS: !!process.env.SMTP_PASS,
          SMTP_TO: !!process.env.SMTP_TO,
          SMTP_HOST: !!process.env.SMTP_HOST,
          SMTP_PORT: !!process.env.SMTP_PORT,
        },
      },
      null,
      2
    ),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
