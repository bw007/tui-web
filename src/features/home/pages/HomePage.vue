<script setup lang="ts">
import CtaBanner from '@/features/home/components/CtaBanner.vue'
import DirectionsSection from '@/features/home/components/DirectionsSection.vue'
import FormSection from '@/features/home/components/FormSection.vue'
import HeroSection from '@/features/home/components/HeroSection.vue'
import IndexingSlider from '@/features/home/components/IndexingSlider.vue'
import LatestArticlesSection from '@/features/home/components/LatestArticlesSection.vue'
import NewsSection from '@/features/home/components/NewsSection.vue'
import PartnerSection from '@/features/home/components/PartnerSection.vue'
import { homeStore } from '@/features/home/stores/home'
import { onMounted } from 'vue'

const home = homeStore()

onMounted(async () => {
  await home.getMenu()
  await home.getCategories({ limit: 8, offset: 0 })
  await home.getNews({ limit: 5, offset: 0 })
  await home.getPosts({ limit: 6, offset: 0 })
  await home.getPartners()
  await home.getStats()
  await home.getSocials()
  await home.getBases()
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
