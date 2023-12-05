export enum TechCategory {
  Language = 'language',
  Framework = 'framework',
  Library = 'library',
  Other = 'other'
}

export interface Tech {
  name: string;
  category?: TechCategory;
}
