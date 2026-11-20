import { defineStore } from "pinia";
import { apiStore } from "./api";
import { ref, type Ref } from "vue";
import type { Category, Menu, News, Partner, Post, Social, Stat } from "@/types/home-types";

export const homeStore = defineStore("weatherStore", () => {
  const api = apiStore()
  const menus = ref<Menu[] | []>([]);
  const news = ref<News[] | []>([]);
  const posts = ref<Post[] | []>([]);
  const partners = ref<Partner[] | []>([])
  const socials = ref<Social[] | []>([])
  const stats = ref<Stat[] | []>([])
  const categories = ref<Category[] | []>([])
  const bases = ref();

  const setData = async (url: string, target: Ref<any[]>, params?: any) => {
    const res = await api.get({ url, params });
    if (res && res.status === 200) {
      target.value = res.data.data;
    }
  };

  const getMenu = () => setData('menu', menus);
  const getNews = (params?: any) => setData('news/list/news', news, params);
  const getPosts = (params?: any) => setData('posts', posts, params);
  const getPartners = () => setData('main/partners', partners);
  const getSocials = () => setData('main/social', socials);
  const getStats = () => setData('main/stats', stats);
  const getCategories = (params?: any) => setData('main/category', categories, params);
  const getBases = () => setData('main/bases', bases);

  return {
    getMenu,
    getNews,
    getPosts,
    getPartners,
    getSocials,
    getStats,
    getCategories,
    getBases,

    news,
    posts,
    partners,
    socials,
    stats,
    categories,
    bases,
    menus
  }
})