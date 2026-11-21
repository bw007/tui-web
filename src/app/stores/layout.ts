import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Menu, Social } from '@/shared/types/layout'
import { http } from '@/shared/lib/http'
import type { PageData } from '@/features/home/types'

export const useLayoutStore = defineStore('layoutStore', () => {
  const menus = ref<Menu[]>([])
  const socials = ref<Social[]>([])
  const pageData = ref<PageData | null>(null)

  const getMenu = async () => {
    const res = await http.get<Menu[]>('menu')
    menus.value = res.data
  }

  const getPageData = async () => {
    const res = await http.get<never, PageData>('pages')
    
    pageData.value = res
  }

  const getSocials = async () => {
    const res = await http.get<Social[]>('main/social')
    socials.value = res.data
  }

  return {
    menus,
    socials,
    pageData,

    getPageData,
    getMenu,
    getSocials
  }
})