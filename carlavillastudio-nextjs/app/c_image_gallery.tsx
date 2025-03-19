import FileReader from './file_reader';
import Image from 'next/image';

const files = FileReader();
const translation = 100;
export default function ImageGallery() {
    return (
        <div className="ImageGallery max-w-[100vw] overflow-x-hidden">
            <div className="carousel flex flex-row flex-nowrap min-w-fit">        
            {files.map((file, index) => {
                // Verificamos si el índice es impar (1, 3, 5, ...)
                if (index % 2 !== 0) {
                    return (
                    <div key={index} className='carousel_view flex flex-row flex-nowrap w-[100vw]'
                        style={{ transform: `translateX(${-translation}vw)` }}
                    >
                        <Image
                            className='w-f2'
                            src={`/images/editorial/${files[index]}`} 
                            alt='Carlavilla Studio Footage'
                            width={1000}
                            height={1000}
                        />
                        <Image
                            className='w-f2'
                            src={`/images/editorial/${files[index+1]}`} 
                            alt='Carlavilla Studio Footage'
                            width={1000}
                            height={1000}
                        />
                    </div>
                    );
                }
                return null; // No renderizamos nada para los índices pares
            })}
            </div>          
        </div>
    )
}