import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my personal portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="h-full w-full fixed left-0 top-0 pointer-events-none opacity-[0.1] after:absolute after:w-[calc(100%_+_20rem)] after:h-[calc(100%_+_20rem)] after:top-[-10rem] after:left-[-10rem] after:bg-[url('/images/noise.jpg')] after:animate-bgNoise"></div>
      </body>
    </html>
  );
}
