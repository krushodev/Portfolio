import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import CustomCursor from '@/app/components/CustomCursor/CustomCursor';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.krusho.dev';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const title = t('title');
  const description = t('description');

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | Ignacio Kruchowski`
    },
    description,
    keywords: [
      'Ignacio Kruchowski',
      'Full Stack Developer',
      'Front-end Developer',
      'Software Developer',
      'Software Architecture',
      'Portfolio',
      'Web Developer Argentina',
      'MERN Stack',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'JavaScript',
      'Tailwind CSS',
      'Rust',
      'Tauri',
      'Python',
      'HTML5',
      'CSS3',
      'Responsive Web Design',
      'Web Development',
      'UI/UX Design',
      'Single Page Applications',
      'RESTful API',
      'Git',
      'GitHub',
      'Redux',
      'Zustand',
      'Framer Motion'
    ],
    authors: [{ name: 'Ignacio Kruchowski', url: SITE_URL }],
    creator: 'Ignacio Kruchowski',
    publisher: 'Ignacio Kruchowski',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        'x-default': `${SITE_URL}/en`
      }
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_AR',
      url: `${SITE_URL}/${locale}`,
      siteName: 'Ignacio Kruchowski | Portfolio',
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/images/profile.jpg`,
          width: 512,
          height: 512,
          alt: 'Ignacio Kruchowski - Full Stack Developer',
          type: 'image/jpeg'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/images/profile.jpg`],
      creator: '@krushodev'
    },
    category: 'technology'
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ignacio Kruchowski',
    url: SITE_URL,
    image: `${SITE_URL}/images/profile.jpg`,
    jobTitle: 'Full Stack Developer',
    description:
      locale === 'es'
        ? 'Desarrollador Full Stack especializado en React, Node.js, TypeScript y arquitectura de software.'
        : 'Full Stack Developer specialized in React, Node.js, TypeScript and software architecture.',
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Rust', 'Tauri', 'Python', 'Tailwind CSS'],
    sameAs: ['https://github.com/krushodev'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR'
    }
  };

  const portfolioJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ignacio Kruchowski | Portfolio',
    url: SITE_URL,
    inLanguage: [locale === 'es' ? 'es-AR' : 'en-US'],
    author: {
      '@type': 'Person',
      name: 'Ignacio Kruchowski'
    }
  };

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }} />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <CustomCursor>{children}</CustomCursor>
          <div className="h-full w-full fixed left-0 top-0 pointer-events-none opacity-[0.1] z-[100] after:absolute after:w-[calc(100%_+_20rem)] after:h-[calc(100%_+_20rem)] after:top-[-10rem] after:left-[-10rem] after:bg-[url('/images/noise.jpg')] after:animate-bgNoise"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
