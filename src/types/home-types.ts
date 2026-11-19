export interface Menu {
  id: number;
  title: string;
  alias: string;
  children: any[];
}

export interface News {
  id: number;
  views: number;
  files: string;
  created_at: string
}

export interface Post {
  id: number;
  files: string;
  alias: string;
  created_at: string;
  category: {
    title: string;
  }
  issue: {
    title: string
  }
  page: string
  authors: {
    title: string
  }[]
  views: number
}

export interface Partner {
  id: number
  title: string
  files: {
    img: string
  }[]
}

export interface Social {
  id: number
  title: string
  files: {
    img: string
  }[]
}

export interface Stat {
  id: number
  options: string
  title: string
}