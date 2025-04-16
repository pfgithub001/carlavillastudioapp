import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic"; 

export async function POST(req: NextRequest) {
    console.log("REDIS_URL:", process.env.REDIS_URL);
    console.log("REDIS_TOKEN:", process.env.REDIS_TOKEN);
  try {
    
    const { email } = await req.json();

    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1]; // "Bearer xxx"

    if (token !== process.env.NEWSLETTER_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Corregir la URL para incluir tanto la clave como el valor
    const redisRes = await fetch(`${process.env.REDIS_URL}/set/${encodeURIComponent(email)}/subscribed`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REDIS_TOKEN}`,
      },
    });

    if (redisRes.ok) {
      return NextResponse.json({ success: true });
    } else {
      const text = await redisRes.text();
      console.error('Error al guardar en Redis:', redisRes.status, text);
      return NextResponse.json({ error: 'Failed to store email' }, { status: 500 });
    }

  } catch (error) {
    console.error('Error al procesar la suscripción:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
