<script setup lang="ts">
import CtaBanner from '@/components/CtaBanner.vue';
import DirectionsSection from '@/components/DirectionsSection.vue';
import FormSection from '@/components/FormSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import IndexingSlider from '@/components/IndexingSlider.vue';
import LatestArticlesSection from '@/components/LatestArticlesSection.vue';
import NewsSection from '@/components/NewsSection.vue';
import PartnerSection from '@/components/PartnerSection.vue';
import { homeStore } from '@/stores/home';
import { onMounted } from 'vue';

const home = homeStore();

onMounted(async () => {
  await home.getMenu();
  await home.getCategories({ limit: 8, offset: 0 });
  await home.getNews({ limit: 5, offset: 0 });
  await home.getPosts({ limit: 6, offset: 0 });
  await home.getPartners();
  await home.getStats();
  await home.getSocials();
  await home.getBases();
});
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