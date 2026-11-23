import { http } from '@/shared/lib/http'
import type { Bases, Category, Form, Gallery, News, Partner, Polls, Post, Stat } from './types'

export const homeApi = {
  getCategories: (params?: any) => http.get<Category[]>('/main/category', { params }),
  getPosts: (params?: any) => http.get<Post[]>('/posts', { params }),
  downloadPost: (params?: any) => http.post<Blob>('/posts/download', null, { params, responseType: 'blob' }),
  getNews: (params?: any) => http.get<News[]>('/news/list/news', { params }),
  getPartners: (params?: any) => http.get<Partner[]>('/main/partners', { params }),
  getStats: (params?: any) => http.get<Stat[]>('/main/stats', { params }),
  getBases: (params?: any) => http.get<Bases[]>('/main/bases', { params }),
  getGallery: (params?: any) => http.get<never, Gallery>('/gallery', { params }),
  sendFeedback: (data: Form, params?: any) =>
    http.post('/feedback-send', data, {
      params,
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  getPolls: (params?: any) => http.get<never, {results: Polls}>('/polls/show', { params }),
  sendPoll: (data: { option: string }, params?: any) => http.post<{ poll_id: number; counts: Polls }>('/polls', data, { params }),
}