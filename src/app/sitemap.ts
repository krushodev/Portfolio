import type { MetadataRoute } from 'next';
import projects from '@/data/projects';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.krusho.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'es'];

  const homePages: MetadataRoute.Sitemap = locales.map(locale => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
      },
    },
  }));

  const projectPages: MetadataRoute.Sitemap = locales.flatMap(locale =>
    projects.map(project => ({
      url: `${SITE_URL}/${locale}/project/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/project/${project.slug}`,
          es: `${SITE_URL}/es/project/${project.slug}`,
        },
      },
    }))
  );

  return [...homePages, ...projectPages];
}
