import { Project } from './types';

const projects: Project[] = [
  {
    id: 'olymfit',
    name: 'OlymFit',
    slug: 'olymfit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    longDescription:
      'OlymFit is a comprehensive e-commerce solution designed specifically for the fitness industry. The platform features advanced product categorization, user authentication, payment processing, and a responsive design that works seamlessly across all devices.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: {
      src: '/images/projects/olymfit/hero.png',
      width: 500,
      height: 300
    },
    gallery: [
      {
        src: '/images/projects/olymfit/hero.png',
        width: 500,
        height: 300
      },
      {
        src: '/images/projects/olymfit/detail1.png',
        width: 500,
        height: 300
      },
      {
        src: '/images/projects/olymfit/detail2.png',
        width: 500,
        height: 300
      }
    ],
    techStack: [{ name: 'React' }, { name: 'Bootstrap' }, { name: 'Firebase' }],
    featured: true,
    status: 'completed',
    year: 2023
  },
  {
    id: 'todo-app',
    name: 'ToDo App',
    slug: 'todo-app',
    description: 'A to-do app for seamless task organization. Create, manage, and organize your tasks effortlessly with this user-friendly platform.',
    longDescription:
      'A comprehensive task management application designed to boost productivity and organization. Features include task creation, categorization, priority settings, due dates, and progress tracking.',
    repository: 'https://github.com/krushodev/ToDo-App',
    deploy: 'https://todoappkrusho.netlify.app/',
    image: {
      src: '/images/projects/todo-app/hero.png',
      width: 500,
      height: 300
    },
    gallery: [
      {
        src: '/images/projects/todo-app/hero.png',
        width: 500,
        height: 300
      },
      {
        src: '/images/projects/todo-app/mobile.png',
        width: 300,
        height: 500
      }
    ],
    techStack: [{ name: 'React' }, { name: 'Typescript' }, { name: 'Chakra UI' }, { name: 'Zustand' }],
    featured: true,
    status: 'completed',
    year: 2023
  },
  {
    id: 'market-swift',
    name: 'MarketSwift',
    slug: 'market-swift',
    description: 'A streamlined hub for effective marketing and automation. Simplify processes and elevate strategies effortlessly.',
    longDescription: 'MarketSwift is a powerful marketing automation platform designed to streamline marketing campaigns and improve efficiency.',
    repository: 'https://github.com/krushodev/MarketSwift-Landing',
    deploy: 'https://landing-marketing-app.vercel.app/',
    image: {
      src: '/images/projects/market-swift/hero.png',
      width: 500,
      height: 300
    },
    gallery: [
      {
        src: '/images/projects/market-swift/hero.png',
        width: 500,
        height: 300
      },
      {
        src: '/images/projects/market-swift/dashboard.png',
        width: 800,
        height: 400
      }
    ],
    techStack: [{ name: 'React' }],
    featured: false,
    status: 'completed',
    year: 2023
  },
  {
    id: 'vox-chat',
    name: 'VoxChat',
    slug: 'vox-chat',
    description: 'VoxChat is a user-friendly chat app that lets you chat securely, customize rooms, and install effortlessly for a smooth experience.',
    longDescription:
      'VoxChat is a comprehensive chat application featuring real-time messaging, room customization, secure authentication, and seamless installation. Built with modern technologies for optimal performance and user experience.',
    repository: 'https://github.com/krushodev/VoxChat-App',
    deploy: null,
    image: {
      src: '/images/projects/vox-chat/hero.png',
      width: 500,
      height: 300
    },
    gallery: [
      {
        src: '/images/projects/vox-chat/hero.png',
        width: 500,
        height: 300
      },
      {
        src: '/images/projects/vox-chat/mobile.png',
        width: 300,
        height: 500
      }
    ],
    techStack: [{ name: 'React Native' }, { name: 'Typescript' }, { name: 'Expo' }, { name: 'TanStack Query' }, { name: 'MongoDB' }, { name: 'ExpressJS' }, { name: 'Socket.io' }, { name: 'Redux' }],
    featured: false,
    status: 'completed',
    year: 2023
  }
];

export default projects;
