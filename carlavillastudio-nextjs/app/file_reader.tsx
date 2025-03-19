import fs from 'fs';
import path from 'path';

// Función para obtener los nombres de los archivos
import { PathLike } from 'fs';

export function getFilesFromDirectory(directoryPath: PathLike): string[] {
  try {
    const files = fs.readdirSync(directoryPath.toString());
    const fileNames = files.filter((file) => {
      return fs.statSync(path.join(directoryPath.toString(), file)).isFile();
    });
    return fileNames;
  } catch (error) {
    console.error('Error al leer el directorio:', error);
    return [];
  }
}



// Ejemplo de uso

export default function FileReader() {
    const directoryPath = path.join(process.cwd(), 'public', '/images/editorial'); // Ruta relativa a la carpeta
    const files = getFilesFromDirectory(directoryPath);
    return files;
}