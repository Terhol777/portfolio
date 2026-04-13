import { Inter } from 'next/font/google';
import './globals.css';
import ClientProviders from '../components/ClientProviders';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Алан Хубежов | Frontend Architect',
  description: 'Портфолио frontend-разработчика. Создаю быстрые, доступные и визуально впечатляющие веб-приложения.',
  metadataBase: new URL('https://Terhol777.github.io'),
  openGraph: {
    title: 'Алан Хубежов | Frontend Architect',
    description: 'Исследуйте мои проекты и свяжитесь для сотрудничества.',
    url: 'https://terhol.github.io',
    siteName: 'Алан Хубежов',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Алан Хубежов - портфолио',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Алан Хубежов | Frontend Architect',
    description: 'Портфолио разработчика',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} bg-dark-bg text-gray-100 antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}