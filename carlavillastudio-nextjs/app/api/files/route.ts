import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET() {
    const directoryPath = path.join(process.cwd(), 'public/images/editorial');

    // Lista blanca de extensiones permitidas
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

    try {
        const files = fs.readdirSync(directoryPath);

        // Filtra por extensiones válidas
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return validExtensions.includes(ext);
        });

        return NextResponse.json(imageFiles);
    } catch (error) {
        console.error('Error al leer el directorio:', error);
        return NextResponse.json({ error: 'Error al obtener archivos' }, { status: 500 });
    }
}
