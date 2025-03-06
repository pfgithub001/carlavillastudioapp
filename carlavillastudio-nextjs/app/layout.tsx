import { raleway } from './ui/fonts';
import './ui/styles/global.scss'
import FloatingMenu from './floating_menu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sther - Repostería Hojaldrada</title>
    </head>
      <body className={`${raleway.className} antialiased`}>
        <div className='myViewport relative'>
          {children}
        </div>
      </body>
    </html>
  );
}
