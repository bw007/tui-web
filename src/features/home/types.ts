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
  title: string
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
  content: string
  title: string
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

export interface Category {
  id: number
  title: string
  posts: number
  content: string
  files: {
    img: string
  }[]
}