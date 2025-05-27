import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export async function POST(req: NextRequest) {
  
  const { password } = await req.json();
  const hash = process.env.ADMIN_PASSWORD_HASH;

  if (!hash || !password) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  // Calcula el hash SHA256 en hexadecimal lowercase
  const hashedInput = createHash('sha256').update(password, 'utf8').digest('hex');

  // Compara el hash calculado con el hash almacenado
  const valid = hashedInput === hash;

  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}
