import { Project } from './types';

const projects: Project[] = [
  {
    id: 'tilded',
    name: 'Tilded',
    slug: 'tilded',
    cardTitle: 'Productivity & Kanban Ecosystem',
    cardDescription: 'Complete task and project management system with multi-language support.',
    description: 'A modern task management app featuring Kanban boards, project sections, and custom priorities to streamline workflows.',
    detailText: 'Full-stack productivity tool with a personalized user experience and advanced task organization.',
    longDescription:
      'Tilded is a modern productivity ecosystem that allows users to organize tasks into projects and sections. It features Kanban boards, priority levels, custom color-coded labels, and a personalized profile system with avatar generation. Built for scale with React 19 and Fastify, supporting 10+ languages.',
    repository: 'https://github.com/krushodev/Tilded',
    deploy: null,
    image: { src: '/images/projects/tilded/hero.jpeg', width: 500, height: 300 },
    gallery: [
      { src: '/images/projects/tilded/hero.jpeg', width: 500, height: 300 },
      { src: '/images/projects/tilded/detail1.jpeg', width: 500, height: 300 },
      { src: '/images/projects/tilded/detail2.jpeg', width: 500, height: 300 },
      { src: '/images/projects/tilded/detail3.jpeg', width: 500, height: 300 }
    ],
    techStack: [{ name: 'React 19' }, { name: 'Fastify' }, { name: 'TypeScript' }, { name: 'PostgreSQL' }, { name: 'TypeORM' }, { name: 'Zustand' }, { name: 'Tailwind CSS' }, { name: 'HeroUI' }],
    featured: true,
    status: 'completed',
    year: 2025
  },
  {
    id: 'nexmon',
    name: 'Nexmon',
    slug: 'nexmon',
    cardTitle: 'Lightweight System Monitor',
    cardDescription: 'High-performance monitoring tool built with Rust and Tauri for near-zero overhead.',
    description: 'A beautiful and efficient system monitor designed for real-time performance tracking with minimal resource usage.',
    detailText: 'Cross-platform desktop application delivering deep system insights through a high-performance Rust core.',
    longDescription:
      'Nexmon is a high-performance system monitor designed to provide real-time metrics without the resource drain of traditional tools. By leveraging Rust and the Tauri framework, it achieves native-level performance and a tiny memory footprint. It features real-time CPU and RAM tracking, process management, and a modern, minimalist interface built with React and Tailwind CSS.',
    repository: 'https://github.com/krushodev/nexmon',
    deploy: 'https://nexmon.vercel.app/',
    image: { src: '/images/projects/nexmon/hero.jpeg', width: 500, height: 300 },
    gallery: [
      { src: '/images/projects/nexmon/hero.jpeg', width: 500, height: 300 },
      { src: '/images/projects/nexmon/detail1.jpeg', width: 500, height: 300 },
      { src: '/images/projects/nexmon/detail2.jpeg', width: 500, height: 300 }
    ],
    techStack: [{ name: 'Rust' }, { name: 'Tauri' }, { name: 'React' }, { name: 'TypeScript' }, { name: 'Tailwind CSS' }],
    featured: true,
    status: 'completed',
    year: 2025
  },
  {
    id: 'void',
    name: 'VOID',
    slug: 'void',
    cardTitle: 'Minimalist Fashion E-commerce',
    cardDescription: 'AI-powered fashion platform for premium oversized menswear.',
    description: "A minimalist fashion e-commerce platform for a men's oversized clothing brand, featuring AI-powered chat assistance and fluid animations.",
    detailText: 'Modern e-commerce experience with Gemini AI integration and architectural design focus.',
    longDescription:
      "VOID is a minimalist fashion e-commerce platform designed for a men's oversized clothing brand. It focuses on structural minimalism and earth tones, exploring the space between garment and skin. The platform features AI-powered chat assistance using Google Gemini, smooth animations with Framer Motion, and a responsive product catalog. Built with heavyweight fabrics in mind, the design reflects the brand's architectural fit and ethical production values.",
    repository: 'https://github.com/krushodev/void',
    deploy: 'https://void-fashion.vercel.app/',
    image: { src: '/images/projects/void/hero.jpeg', width: 500, height: 300 },
    gallery: [
      { src: '/images/projects/void/hero.jpeg', width: 500, height: 300 },
      { src: '/images/projects/void/detail1.jpeg', width: 500, height: 300 },
      { src: '/images/projects/void/detail2.jpeg', width: 500, height: 300 }
    ],
    techStack: [{ name: 'React 19' }, { name: 'TypeScript' }, { name: 'Vite' }, { name: 'Tailwind CSS' }, { name: 'Framer Motion' }, { name: 'Google Generative AI' }, { name: 'Lucide React' }],
    featured: true,
    status: 'completed',
    year: 2026
  },

  {
    id: 'focusly',
    name: 'Focusly',
    slug: 'focusly',
    cardTitle: 'Minimalist Pomodoro Timer',
    cardDescription: 'Distraction-free focus tool designed to help users enter and maintain flow state.',
    description: 'A beautiful, minimalist Pomodoro timer built for deep work, featuring smooth GSAP animations and custom focus modes.',
    detailText: 'Cross-platform desktop application with native notifications and a premium violet-cyan aesthetic.',
    longDescription:
      'Focusly is a minimalist Pomodoro application designed to eliminate distractions and enhance productivity. It offers several focus presets (Classic, Deep, and Ultra Focus) alongside a fully configurable custom mode. The app leverages Electron for a native desktop experience and GSAP for high-quality visual feedback, including an animated progress ring and a breathing effect during focus sessions.',
    repository: 'https://github.com/krushodev/focusly',
    deploy: null,
    image: { src: '/images/projects/focusly/hero.jpeg', width: 500, height: 300 },
    gallery: [
      { src: '/images/projects/focusly/hero.jpeg', width: 500, height: 300 },
      { src: '/images/projects/focusly/detail1.jpeg', width: 500, height: 300 },
      { src: '/images/projects/focusly/detail2.jpeg', width: 500, height: 300 }
    ],
    techStack: [{ name: 'Electron' }, { name: 'GSAP' }, { name: 'Vanilla JS' }, { name: 'CSS Variables' }, { name: 'Astro' }, { name: 'Tailwind CSS' }],
    featured: true,
    status: 'completed',
    year: 2025
  },
  {
    id: 'nova',
    name: 'Nova',
    slug: 'nova',
    cardTitle: 'Real-Time Financial Dashboard',
    cardDescription: 'Explore market instruments with live updates via WebSockets.',
    description: 'A high-performance market explorer that integrates real-time data and historical analysis for digital assets.',
    detailText: 'Comprehensive financial application showcasing real-time data streaming and historical market analysis.',
    longDescription:
      'Nova is a financial dashboard designed for market exploration. It integrates directly with the Binance API to fetch historical kline data and uses WebSockets for real-time price updates. The backend is optimized with Bun and Redis to handle high-frequency data efficiently.',
    repository: 'https://github.com/krushodev/Nova',
    deploy: null,
    image: { src: '/images/projects/nova/hero.jpeg', width: 500, height: 300 },
    gallery: [
      { src: '/images/projects/nova/hero.jpeg', width: 500, height: 300 },
      { src: '/images/projects/nova/detail1.jpeg', width: 500, height: 300 },
      { src: '/images/projects/nova/detail2.jpeg', width: 500, height: 300 }
    ],
    techStack: [{ name: 'React' }, { name: 'Fastify' }, { name: 'Bun' }, { name: 'Redis' }, { name: 'PostgreSQL' }, { name: 'WebSocket' }, { name: 'Zustand' }, { name: 'TypeORM' }],
    featured: true,
    status: 'completed',
    year: 2025
  },
  {
    id: 'devflights',
    name: 'DevFlights Airways',
    slug: 'devflights',
    cardTitle: 'BI Airline Analytics',
    cardDescription: 'Business Intelligence dashboard for airline operational and financial data.',
    description: 'An interactive analytics platform that transforms complex airline data into actionable business insights.',
    detailText: 'Data Analytics solution featuring a Star Schema Data Warehouse and interactive visualizations.',
    longDescription:
      'DevFlights Airways is a BI project that migrates static reporting to an interactive web dashboard. It utilizes a PostgreSQL Data Warehouse with a Star Schema (Fact and Dimension tables) to analyze fleet efficiency, route profitability, and passenger behavior using Python and Streamlit.',
    repository: 'https://github.com/krushodev/devlights-airways',
    deploy: 'https://devflights-airways.streamlit.app/',
    image: { src: '/images/projects/devflights/hero.jpeg', width: 500, height: 300 },
    gallery: [
      { src: '/images/projects/devflights/hero.jpeg', width: 500, height: 300 },
      { src: '/images/projects/devflights/detail1.jpeg', width: 500, height: 300 }
    ],
    techStack: [{ name: 'Python' }, { name: 'Streamlit' }, { name: 'PostgreSQL' }, { name: 'Pandas' }, { name: 'Plotly' }, { name: 'SQLAlchemy' }],
    featured: false,
    status: 'completed',
    year: 2025
  },
  {
    id: 'vox-chat',
    name: 'VoxChat',
    slug: 'vox-chat',
    cardTitle: 'Secure Real-Time Chat',
    cardDescription: 'Real-time messaging with room customization and secure encryption.',
    description: 'A feature-rich chat application for mobile, offering secure communication and seamless user interaction.',
    detailText: 'Comprehensive chat application with real-time messaging, room customization, and secure authentication.',
    longDescription:
      'VoxChat is a user-friendly chat app that lets you chat securely, customize rooms, and install effortlessly. Built with a focus on real-time performance using Socket.io and a robust MERN-like stack for mobile.',
    repository: 'https://github.com/krushodev/VoxChat-App',
    deploy: null,
    image: { src: '/images/projects/vox-chat/hero.png', width: 500, height: 300 },
    gallery: [
      { src: '/images/projects/vox-chat/hero.png', width: 500, height: 300 },
      { src: '/images/projects/vox-chat/detail1.jpeg', width: 500, height: 300 },
      { src: '/images/projects/vox-chat/detail2.jpeg', width: 500, height: 300 }
    ],
    techStack: [{ name: 'React Native' }, { name: 'TypeScript' }, { name: 'Expo' }, { name: 'Socket.io' }, { name: 'MongoDB' }, { name: 'ExpressJS' }, { name: 'Redux' }],
    featured: true,
    status: 'completed',
    year: 2023
  },
  {
    id: 'market-swift',
    name: 'MarketSwift',
    slug: 'market-swift',
    cardTitle: 'Marketing Automation Landing',
    cardDescription: 'High-performance landing page for marketing automation solutions.',
    description: 'A streamlined hub for effective marketing strategies and process automation.',
    detailText: 'Optimized landing page focused on UX/UI and clear conversion paths for marketing tools.',
    longDescription:
      'MarketSwift is a streamlined landing page designed for a marketing automation platform. It focuses on high performance and intuitive design to communicate complex automation features effectively.',
    repository: 'https://github.com/krushodev/MarketSwift-Landing',
    deploy: 'https://landing-marketing-app.vercel.app/',
    image: { src: '/images/projects/market-swift/hero.png', width: 500, height: 300 },
    gallery: [{ src: '/images/projects/market-swift/hero.png', width: 500, height: 300 }],
    techStack: [{ name: 'React' }, { name: 'Vite' }, { name: 'Tailwind CSS' }],
    featured: false,
    status: 'completed',
    year: 2023
  }
];

export default projects;
