export interface PageInfo {
  title?: string;
  email?: string;
  short_name?: string;
  author_page?: string;
  linkedin?: string;
  github?: string;
  team_work?: Teamwork[];
}

interface Teamwork {
  name?: string;
  email?: string;
}
