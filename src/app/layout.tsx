import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ignacio Kruchowski 🤘 | Software Developer',
  description: `
  Welcome to my digital space! I'm Ignacio Kruchowski, a Full Stack Developer with a passion for crafting seamless and innovative web experiences. Specializing in front-end development using the powerful MERN stack, I bring creativity and technical knowledge to every project.
`,
  keywords: [
    'Full Stack Developer',
    'Front-end Developer',
    'Software Developer',
    'Software Architecture',
    'MERN Stack',
    'ReactJSs',
    'NodeJSs',
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
  authors: [{ name: 'Ignacio Kruchowski' }]
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
