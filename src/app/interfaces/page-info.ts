export interface PageInfo {
  title?: string;
  email?: string;
  short_name?: string;
  author_page?: string;
  linkedin?: string;
  github?: string;
  team_work?: TeamWorkMember[];
}

export interface TeamWorkMember {
  nombre?: string;
  subtitulo?: string;
  frase?: string;
  twitter?: string;
  image_url?: string;
}
