import { StaticImageData } from 'next/image';

import mockup1 from '../../../public/images/mock1.png';
import mockup2 from '../../../public/images/mock2.png';
import mockup3 from '../../../public/images/mock3.png';
import mockup4 from '../../../public/images/mock4.png';

import { Tech } from '../types/globals';

export interface Project {
  name: string;
  description: string;
  repository: string;
  image: StaticImageData;
  deploy: string | null;
  techStack: Tech[];
}

const projects: Project[] = [
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: mockup1,
    techStack: [{ name: 'React' }, { name: 'Bootstrap' }, { name: 'Firebase' }]
  },
  {
    name: 'ToDo App',
    description:
      'A to-do app for seamless task organization. Create, manage, and organize your tasks effortlessly with this user-friendly platform. Experience simplicity and productivity in one place.',
    repository: 'https://github.com/krushodev/ToDo-App',
    deploy: 'https://todoappkrusho.netlify.app/',
    image: mockup2,
    techStack: [{ name: 'React' }, { name: 'Typescript' }, { name: 'Chakra UI' }, { name: 'Zustand' }]
  },
  {
    name: 'MarketSwift',
    description: 'A streamlined hub for effective marketing and automation. Simplify processes and elevate strategies effortlessly with this user-friendly platform.',
    repository: 'https://github.com/krushodev/MarketSwift-Landing',
    deploy: 'https://landing-marketing-app.vercel.app/',
    image: mockup3,
    techStack: [{ name: 'React' }]
  },
  {
    name: 'VoxChat',
    description:
      'VoxChat is a user-friendly chat app.It lets you chat securely, customize rooms, and install effortlessly for a smooth experience. The app is all about simple, real-time conversations with a personal touch.',
    repository: 'https://github.com/krushodev/VoxChat-App',
    deploy: null,
    image: mockup4,
    techStack: [{ name: 'React Native' }, { name: 'Typescript' }, { name: 'Expo' }, { name: 'TanStack Query' }, { name: 'MongoDB' }, { name: 'ExpressJS' }, { name: 'Socket.io' }, { name: 'Redux' }]
  }
];

export default projects;
