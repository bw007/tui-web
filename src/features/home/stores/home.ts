import { defineStore } from 'pinia'
import { ref } from 'vue'
import { homeApi } from '../api'
import type { Bases, Category, News, Partner, Post, Stat } from '../types'

export const useHomeStore = defineStore('home', () => {
  const news = ref<News[]>([])
  const posts = ref<Post[]>([])
  const partners = ref<Partner[]>([])
  const stats = ref<Stat[]>([])
  const categories = ref<Category[]>([])
  const bases = ref<Bases[]>([])

  const getNews = async (params?: any) => {
    const res = await homeApi.getNews(params)
    news.value = res.data
  }

  const getPosts = async (params?: any) => {
    const res = await homeApi.getPosts(params)
    posts.value = res.data
  }

  const downloadPost = async (post: Post) => {
    const res = await homeApi.downloadPost({ id: post.id })
    const blob = res.data ?? res

    const url = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `${post.title}.pdf`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)

    posts.value = posts.value.map(p => {
      if (p.id == post.id) return { ...p, download: post.download + 1 }
      
      return p
    })
  }

  const getPartners = async () => {
    const res = await homeApi.getPartners()
    partners.value = res.data
  }

  const getStats = async () => {
    const res = await homeApi.getStats()
    stats.value = res.data
  }

  const getCategories = async (params: any) => {
    const res = await homeApi.getCategories(params)
    categories.value = res.data
  }

  const getBases = async () => {
    const res = await homeApi.getBases()
    bases.value = res.data
  }

  return {
    news,
    posts,
    partners,
    stats,
    categories,
    bases,

    downloadPost,
    getNews,
    getPosts,
    getPartners,
    getStats,
    getCategories,
    getBases
  }
})