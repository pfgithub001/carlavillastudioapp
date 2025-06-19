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
      <title>Carlavilla Studio - Vestidos de novia a medida</title>
      <meta
        name="description"
        content="Diseñamos y confeccionamos vestidos de novia únicos, hechos a medida para novias que buscan elegancia y autenticidad. Reserva tu cita en Carlavilla Studio."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph para redes sociales */}
      <meta property="og:title" content="Carlavilla Studio - Vestidos de novia a medida" />
      <meta property="og:description" content="Descubre nuestros vestidos de novia personalizados. Diseño exclusivo, elegancia y confección artesanal." />
      <meta property="og:image" content="	https://www.carlavillastudio.com/_next/image?url=%2Fimages%2Fhome%2Fcontacto.png&w=3840&q=100" />
      <meta property="og:url" content="https://www.carlavillastudio.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Carlavilla Studio - Vestidos de novia a medida" />
      <meta name="twitter:description" content="Vestidos de novia hechos a medida, elegantes y exclusivos. Reserva tu cita en Carlavilla Studio." />
      <meta name="twitter:image" content="	https://www.carlavillastudio.com/_next/image?url=%2Fimages%2Fhome%2Fcontacto.png&w=3840&q=100" />
    </head>
      <body className={`${hk_grotesk.className} antialiased`}>
        <div className='relative'>
          {children}
        </div>
        <Footer />
        <FloatingMenu />
      </body>
    </html>
  );
}
