import { StaticImageData } from 'next/image';
import olymfitImage from '../../../public/mockup-project1.png';

import javascript from '../../../public/icons/javascript.svg';
import typescript from '../../../public/icons/typescript.svg';
import nodejs from '../../../public/icons/nodejs.svg';
import jest from '../../../public/icons/jest.svg';
import expressjs from '../../../public/icons/expressjs.svg';
import react from '../../../public/icons/react.svg';
import nextjs from '../../../public/icons/nextjs.svg';
import redux from '../../../public/icons/redux.svg';
import sass from '../../../public/icons/sass.svg';
import tailwind from '../../../public/icons/tailwind.svg';
import bootstrap from '../../../public/icons/bootstrap.svg';
import materialui from '../../../public/icons/materialui.svg';
import postman from '../../../public/icons/postman.svg';
import git from '../../../public/icons/git.svg';
import docker from '../../../public/icons/docker.svg';
import mongodb from '../../../public/icons/mongodb.svg';
import bash from '../../../public/icons/bash.svg';

interface Tech {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  repository: string;
  image: StaticImageData;
  deploy: string;
  techStack: Tech[];
}

const projects: Project[] = [
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [
      { name: 'react', icon: react },
      { name: 'bootstrap', icon: bootstrap }
    ]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [
      { name: 'react', icon: react },
      { name: 'bootstrap', icon: bootstrap }
    ]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [
      { name: 'react', icon: react },
      { name: 'bootstrap', icon: bootstrap }
    ]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [
      { name: 'react', icon: react },
      { name: 'bootstrap', icon: bootstrap }
    ]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [
      { name: 'react', icon: react },
      { name: 'bootstrap', icon: bootstrap }
    ]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [
      { name: 'react', icon: react },
      { name: 'bootstrap', icon: bootstrap }
    ]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [
      { name: 'react', icon: react },
      { name: 'bootstrap', icon: bootstrap }
    ]
  }
];

export default projects;
