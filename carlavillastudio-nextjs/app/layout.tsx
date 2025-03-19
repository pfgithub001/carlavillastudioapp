import { hk_grotesk } from './ui/fonts';
import './ui/styles/global.scss'
import FloatingMenu from './floating_menu';
import Footer from './c_footer';

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
      <title>Carlavilla Studio - Vestidos de novia</title>
    </head>
      <body className={`${hk_grotesk.className} antialiased`}>
        <div className='myViewport relative'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
