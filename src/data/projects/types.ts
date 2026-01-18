export interface Tech {
  name: string;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  cardTitle: string;
  cardDescription: string;
  description: string;
  detailText: string;
  longDescription?: string;
  repository: string;
  deploy: string | null;
  image: ProjectImage;
  gallery?: ProjectImage[];
  techStack: Tech[];
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  year?: number;
  client?: string;
}
