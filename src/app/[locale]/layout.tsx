import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'Full Stack Developer',
      'Front-end Developer',
      'Software Developer',
      'Software Architecture',
      'MERN Stack',
      'ReactJS',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive Web Design',
      'Web Development',
      'UI/UX Design',
      'Single Page Applications (SPA)',
      'RESTful API',
      'Git/GitHub',
      'Redux',
      'Bootstrap',
      'Material-UI'
    ],
    authors: [{ name: 'Ignacio Kruchowski' }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        es: '/es'
      }
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <div className="h-full w-full fixed left-0 top-0 pointer-events-none opacity-[0.1] z-[100] after:absolute after:w-[calc(100%_+_20rem)] after:h-[calc(100%_+_20rem)] after:top-[-10rem] after:left-[-10rem] after:bg-[url('/images/noise.jpg')] after:animate-bgNoise"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
