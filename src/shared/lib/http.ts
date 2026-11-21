import axios from 'axios'
import { i18n } from '@/app/plugins/i18n'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://journal.tiu.uz/api/v1',
  timeout: 15000
})

http.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = i18n.global.locale.value
  return config
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.status, error.message)
    return Promise.reject(error)
  }
)