import { defineStore } from 'pinia'
import { ref } from 'vue'
import { homeApi } from '../api'
import type { Bases, Category, Form, Gallery, News, Partner, Polls, Post, Stat } from '../types'

export const useHomeStore = defineStore('home', () => {
  const news = ref<News[]>([])
  const posts = ref<Post[]>([])
  const partners = ref<Partner[]>([])
  const stats = ref<Stat[]>([])
  const categories = ref<Category[]>([])
  const bases = ref<Bases[]>([])
  const polls = ref<Polls | null>(null)
  const gallery = ref<Gallery | null>(null)

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

  const getGallery = async () => {
    const res = await homeApi.getGallery();
    
    gallery.value = res
  }

  const getBases = async () => {
    const res = await homeApi.getBases()
    bases.value = res.data
  }

  const getPolls = async (params?: any) => {
    const res = await homeApi.getPolls(params)
    
    polls.value = res.results
  }

  const sendFeedback = async (form: Form, params?: any) => {
    const payload = new FormData()
    payload.append('fio', form.fio)
    payload.append('phone', form.phone)
    payload.append('email', form.email || '')
    payload.append('message', form.message)
    if (form.file) payload.append('file', form.file)

    await homeApi.sendFeedback(payload, params)
  }

  const sendPoll = async (option: { option: string }, params?: any) => {
    const res = await homeApi.sendPoll(option, params)
    polls.value = res.counts
  }

  return {
    news,
    posts,
    partners,
    stats,
    categories,
    bases,
    polls,
    gallery,

    downloadPost,
    getNews,
    getPosts,
    getPartners,
    getStats,
    getCategories,
    getBases,
    getPolls,
    sendFeedback,
    sendPoll,
    getGallery
  }
})