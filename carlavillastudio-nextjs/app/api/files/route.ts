import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic"; // 🔹 Agrega esto para evitar caché en SSR

export async function GET() {
    const directoryPath = path.join(process.cwd(), 'public/images/editorial');

    try {
        const files = fs.readdirSync(directoryPath);
        return NextResponse.json(files);
    } catch (error) {
        console.error('Error al leer el directorio:', error);
        return NextResponse.json({ error: 'Error al obtener archivos' }, { status: 500 });
    }
}
