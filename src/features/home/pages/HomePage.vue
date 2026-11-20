<script setup lang="ts">
import CtaBanner from '@/features/home/components/CtaBanner.vue'
import DirectionsSection from '@/features/home/components/DirectionsSection.vue'
import FormSection from '@/features/home/components/FormSection.vue'
import HeroSection from '@/features/home/components/HeroSection.vue'
import IndexingSlider from '@/features/home/components/IndexingSlider.vue'
import LatestArticlesSection from '@/features/home/components/LatestArticlesSection.vue'
import NewsSection from '@/features/home/components/NewsSection.vue'
import PartnerSection from '@/features/home/components/PartnerSection.vue'
import { useHomeStore } from '@/features/home/stores/home'
import { onMounted } from 'vue'

const homeStore = useHomeStore()

onMounted(async () => {
  await homeStore.getMenu()
  await homeStore.getPageData()
  await homeStore.getCategories({ limit: 8, offset: 0 })
  await homeStore.getNews({ limit: 5, offset: 0 })
  await homeStore.getPosts({ limit: 6, offset: 0 })
  await homeStore.getPartners()
  await homeStore.getStats()
  await homeStore.getSocials()
  await homeStore.getBases()
})
</script>

<template>
  <HeroSection />
  <DirectionsSection />
  <CtaBanner />
  <NewsSection />
  <LatestArticlesSection />
  <IndexingSlider />
  <FormSection />
  <PartnerSection />
</template>
