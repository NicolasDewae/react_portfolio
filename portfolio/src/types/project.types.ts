export interface ProjectImage {
  image: string;
  alt: string;
}

export interface ProjectListItem {
  id: number;
  pathway: string;
  title: string;
  picture: string;
  projectImages: string[];
}

export interface ProjectDetail {
  id: number;
  pathway: string;
  title: string;
  picture: string;
  projectImages: Record<string, ProjectImage>;
}

export interface StreetViewDetail {
  id: number;
  pathway: string;
  title: string;
  picture: string;
  projectImages: ProjectImage[];
}
