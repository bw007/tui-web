import { defineStore } from "pinia";
import { apiStore } from "./api";
import { ref } from "vue";
import type { AxiosResponse } from "axios";
import type { Menu, News, Partner, Post, Social, Stat } from "@/types/home-types";

export const homeStore = defineStore("weatherStore", () => {
  const api = apiStore()
  const menus = ref<Menu[] | []>([]);
  const news = ref<News[] | []>([]);
  const posts = ref<Post[] | []>([]);
  const partners = ref<Partner[] | []>([])
  const socials = ref<Social[] | []>([])
  const stats = ref<Stat[] | []>([])

  const getMenu = async () => {
    let res = await api.get({url: 'menu'});

    if(res && res.status === 200) {
      menus.value = [ ...res.data.data ]
    }
  }

  const getNews = async (params: any) => {
    let res = await api.get({url: 'news/list/news', params});

    if(res && res.status === 200) {
      news.value = [ ...res.data.data ]
    }
  }

  const getPosts = async (params: any) => {
    let res = await api.get({url: 'posts', params});

    if(res && res.status === 200) {
      console.log(res);
      
      posts.value = [ ...res.data.data ]
    }
  }

  const getPartners = async () => {
    let res = await api.get({url: 'main/partners'});

    if(res && res.status === 200) {
      console.log(res);
      
      partners.value = [ ...res.data.data ]
    }
  }

  const getSocials = async () => {
    let res = await api.get({url: 'main/social'});

    if(res && res.status === 200) {
      console.log(res.data.data);
      
      socials.value = [ ...res.data.data ]
    }
  }

  const getStats = async () => {
    let res = await api.get({url: 'main/stats'});

    if(res && res.status === 200) {
      console.log(res.data.data);
      
      stats.value = [ ...res.data.data ]
    }
  }

  return {
    getMenu,
    getNews,
    getPosts,
    getPartners,
    getSocials,
    getStats,

    news,
    posts,
    partners,
    socials,
    stats,
    menus
  }
})