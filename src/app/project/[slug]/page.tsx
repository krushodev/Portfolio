'use client';

import { useParams } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function ProjectRedirect() {
  const params = useParams();
  redirect(`/en/project/${params.slug}`);
}
