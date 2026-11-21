import { http } from '@/shared/lib/http'
import type { Bases, Category, News, Partner, Post, Stat } from './types'

export const homeApi = {
  getCategories: (params?: any) => http.get<Category[]>('/main/category', { params }),
  getPosts: (params?: any) => http.get<Post[]>('/posts', { params }),
  downloadPost: (params?: any) => http.post<Blob>('/posts/download', null, { params, responseType: 'blob' }),
  getNews: (params?: any) => http.get<News[]>('/news/list/news', { params }),
  getPartners: (params?: any) => http.get<Partner[]>('/main/partners', { params }),
  getStats: (params?: any) => http.get<Stat[]>('/main/stats', { params }),
  getBases: (params?: any) => http.get<Bases[]>('/main/bases', { params })
}