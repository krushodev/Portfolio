# Portfolio

A modern, multilingual portfolio website built with Next.js 14, featuring smooth animations, interactive components, and a responsive design.

## ✨ Features

- **Internationalization (i18n)**: Multi-language support using next-intl
- **Smooth Animations**: GSAP-powered animations and transitions
- **Interactive UI**: Custom cursor, burger menu, and scroll indicators
- **Responsive Design**: Fully responsive layout with Tailwind CSS
- **Project Showcase**: Dynamic project pages with detailed information
- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS with 3D transforms
- **Animations**: GSAP, SplitType
- **UI Components**:
  - React Icons
  - Hamburger React
  - React Animated Cursor
  - Swiper
- **Internationalization**: next-intl
- **Utilities**: React Scroll, React Intersection Observer

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   ├── components/        # Reusable components
│   │   │   ├── BurgerMenu/
│   │   │   ├── CustomCursor/
│   │   │   ├── LanguagePicker/
│   │   │   ├── ProjectCard/
│   │   │   └── ...
│   │   └── layout/            # Layout sections
│   │       ├── About/
│   │       ├── Contact/
│   │       ├── Header/
│   │       ├── Knowledge/
│   │       └── Work/
│   ├── data/                  # Project data
│   ├── i18n/                  # Internationalization config
│   └── middleware.ts          # Next.js middleware
├── public/                    # Static assets
└── messages/                  # Translation files

```

## 🌐 Internationalization

This project uses `next-intl` for multi-language support. Translation files are located in the `messages/` directory.

## 🎨 Customization

- **Styling**: Modify `tailwind.config.ts` for theme customization
- **Projects**: Add project data in `src/data/projects/`
- **Translations**: Update language files in `messages/`

## 📝 License

This project is private and not licensed for public use.

## 👤 Author

Built with by Krushodev
