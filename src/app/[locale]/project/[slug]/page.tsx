import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import projects from '@/data/projects';
import { routing } from '@/i18n/routing';
import ProjectDetail from './ProjectDetail';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ignaciokruchowski.dev';

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  const t = await getTranslations({ locale, namespace: 'projects' });
  const description = t(`${slug}.description`);
  const title = project.name;

  return {
    title,
    description,
    keywords: [project.name, ...project.techStack.map(tech => tech.name), 'Ignacio Kruchowski', 'Portfolio Project', 'Web Development'],
    alternates: {
      canonical: `${SITE_URL}/${locale}/project/${slug}`,
      languages: {
        en: `${SITE_URL}/en/project/${slug}`,
        es: `${SITE_URL}/es/project/${slug}`
      }
    },
    openGraph: {
      type: 'article',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      url: `${SITE_URL}/${locale}/project/${slug}`,
      title: `${title} | Ignacio Kruchowski`,
      description,
      siteName: 'Ignacio Kruchowski | Portfolio',
      images: [
        {
          url: `${SITE_URL}${project.image.src}`,
          width: project.image.width,
          height: project.image.height,
          alt: `${project.name} - Project Screenshot`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Ignacio Kruchowski`,
      description,
      images: [`${SITE_URL}${project.image.src}`]
    }
  };
}

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    projects.map(project => ({
      locale,
      slug: project.slug
    }))
  );
}

export default function ProjectPage() {
  return <ProjectDetail />;
}
