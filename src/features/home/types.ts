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
  download: number;
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
  options?: string
  files: {
    img: string
  }[]
}

export interface Bases {
  id: number
  title: string
  options?: string
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

export interface Polls {
  result_1: number
  result_2: number
  result_3: number
  result_4: number
  result_5: number
}

export interface Gallery {
  data: {
    id: number
    title: string
    files: {
      img: string
      type: string
    }[]
  }[]
}

export interface Form {
  fio: string
  phone: string
  email?: string
  message: string
  file?: any
}

export interface PageData {
  index_bases: string
  work_time: string
  iframe_footer: string
  latest_news_article: string
  latest_news: string
  juranal_cat_desc: string
  juranal_cat_t: string
  header_desc: string
  index_bases_desc: string
  latest_news_desc: string
  header_button: string
  partners_desc: string
  partners: string
  index_bases_desc2: string
  phone: string
  address: string
  email: string
  header_t: string
  header_date: string
  latest_news_article_desc: string
  header_num: string
  issn: string
  footer_rights: string
}