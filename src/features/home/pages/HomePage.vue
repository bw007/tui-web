<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import CtaBanner from '@/features/home/components/CtaBanner.vue'
import FormSection from '@/features/home/components/FormSection.vue'
import HeroSection from '@/features/home/components/HeroSection.vue'
import IndexingSlider from '@/features/home/components/IndexingSlider.vue'
import NewsSection from '@/features/home/components/NewsSection.vue'
import PartnerSection from '@/features/home/components/PartnerSection.vue'
import PostsSection from '../components/PostsSection.vue'
import CategorySection from '../components/CategorySection.vue'

import { useHomeStore } from '@/features/home/stores/home'

const { locale } = useI18n();
const homeStore = useHomeStore();

const fetchHomeData = async () => {
  await Promise.allSettled([
    homeStore.getCategories({ limit: 8, offset: 0 }),
    homeStore.getNews({ limit: 5, offset: 0 }),
    homeStore.getPosts({ limit: 6, offset: 0 }),
    homeStore.getPartners(),
    homeStore.getStats(),
    homeStore.getBases()
  ])
}

onMounted(fetchHomeData)
watch(locale, fetchHomeData)
</script>

<template>
  <HeroSection />
  <CategorySection />
  <CtaBanner />
  <NewsSection />
  <PostsSection />
  <IndexingSlider />
  <FormSection />
  <PartnerSection />
</template>
