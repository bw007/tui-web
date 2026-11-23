<script setup lang="ts" generic="T">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const defaultBreakpoints: SwiperOptions['breakpoints'] = {
  320: { slidesPerView: 1, spaceBetween: 8 },
  520: { slidesPerView: 2, spaceBetween: 16 },
  1024: { slidesPerView: 3, spaceBetween: 16 },
  1280: { slidesPerView: 5, spaceBetween: 24 },
}

const props = withDefaults(
  defineProps<{
    items: T[]
    navigation?: boolean
    pagination?: boolean
    loop?: boolean
    autoplay?: boolean
    autoplayDelay?: number
    breakpoints?: SwiperOptions['breakpoints']
    marquee?: boolean
    marqueeSpeed?: number
  }>(),
  {
    navigation: false,
    pagination: false,
    loop: false,
    autoplay: false,
    autoplayDelay: 3000,
    marquee: false,
    marqueeSpeed: 5000,
  },
)

const mergedBreakpoints = computed(() => ({
  ...defaultBreakpoints,
  ...props.breakpoints,
}))

const showPagination = computed(() => props.pagination && !props.marquee)

const modules = computed(() => {
  const list = []
  if (props.navigation) list.push(Navigation)
  if (showPagination.value) list.push(Pagination)
  if (props.autoplay || props.marquee) list.push(Autoplay)
  return list
})

const autoplayOptions = computed(() => {
  if (props.marquee) return { delay: 0, disableOnInteraction: false }
  return props.autoplay
    ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }
    : false
})
</script>

<template>
  <Swiper
    :class="['base-slider', { 'has-pagination': showPagination, 'is-marquee': marquee }]"
    :modules="modules"
    :breakpoints="mergedBreakpoints"
    :navigation="navigation"
    :pagination="showPagination ? { clickable: true } : false"
    :loop="loop || marquee"
    :speed="marquee ? marqueeSpeed : 300"
    :allow-touch-move="!marquee"
    :autoplay="autoplayOptions"
  >
    <SwiperSlide v-for="(item, i) in items" :key="i">
      <slot :item="item" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.base-slider.has-pagination {
  padding-bottom: 40px;
}
.base-slider.is-marquee :deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}
.base-slider :deep(.swiper-pagination) {
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.base-slider :deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  margin: 0 !important;
  border-radius: 9999px;
  background: var(--color-border);
  opacity: 1;
  flex-shrink: 0;
  transition: width 0.3s;
}
.base-slider :deep(.swiper-pagination-bullet-active) {
  width: 32px;
  background: var(--color-brand);
}
</style>