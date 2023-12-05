import { StaticImageData } from 'next/image';
import olymfitImage from '../../../public/mockup-project1.png';
import { Tech } from '../types/globals';

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
    techStack: [{ name: 'react' }, { name: 'bootstrap' }]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [{ name: 'react' }, { name: 'bootstrap' }]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [{ name: 'react' }, { name: 'bootstrap' }]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [{ name: 'react' }, { name: 'bootstrap' }]
  },
  {
    name: 'OlymFit',
    description: 'Evolutionary e-commerce platform tailored for fitness enthusiasts, offering a dynamic and immersive experience in the world of health and wellness.',
    repository: 'https://github.com/krushodev/Olymfit-Ecommerce',
    deploy: 'https://olymfit.netlify.app/',
    image: olymfitImage,
    techStack: [{ name: 'react' }, { name: 'bootstrap' }]
  }
];

export default projects;
