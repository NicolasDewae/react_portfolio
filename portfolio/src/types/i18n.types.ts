export interface NavLinkItem {
  id: number;
  title: string;
  pathway: string;
}

export interface NavLinkData {
  fr: NavLinkItem[];
  en: NavLinkItem[];
}

export interface TextItem {
  id: number;
  message: string;
}

export interface TextData {
  fr: TextItem[];
  en: TextItem[];
}

export interface PreviewProjectItem {
  id: number;
  button: string;
}

export interface PreviewProjectData {
  fr: PreviewProjectItem[];
  en: PreviewProjectItem[];
}

export interface AboutItem {
  id: number;
  title1: string;
  title2: string;
  message: string[];
}

export interface AboutData {
  fr: AboutItem[];
  en: AboutItem[];
}

export interface FooterItem {
  id: number;
  message: string;
  placerHolder: string;
  button: string;
  copyright: string;
  contextTitle: string;
  contextMessage: string;
}

export interface FooterData {
  fr: FooterItem[];
  en: FooterItem[];
}

export interface ContactItem {
  id: number;
  title: string;
  text: string;
  lastName: string;
  firstName: string;
  email: string;
  message: string;
  button: string;
}

export interface ContactData {
  fr: ContactItem[];
  en: ContactItem[];
}

export interface ProjectsItem {
  id: number;
  streetview?: string;
  confinement?: string;
  street?: string;
  canaries?: string;
}

export interface ProjectsData {
  fr: ProjectsItem[];
  en: ProjectsItem[];
}

export interface NotFoundItem {
  id: number;
  title: string;
  subTitle: string;
  message: string;
  button: string;
}

export interface NotFoundData {
  fr: NotFoundItem[];
  en: NotFoundItem[];
}
