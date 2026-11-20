<script setup lang="ts">
import IconMessage from '@/shared/ui/icons/IconMessage.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'
import { homeStore } from '@/features/home/stores/home'
import { storeToRefs } from 'pinia'

const home = homeStore()
const { socials, stats } = storeToRefs(home)
</script>

<template>
  <section class="relative bg-linear-to-r from-brand to-[#224E98] text-white py-18.75 overflow-hidden">
    <div
      class="hidden lg:flex flex-col gap-1.5 fixed left-0 top-1/2 -translate-y-1/2 z-30"
    >
      <a
        v-for="social in socials"
        :key="social.title"
        target="_blank"
        class="w-11 h-11 bg-brand-light cursor-pointer hover:bg-brand-light/75 rounded-r-lg flex items-center justify-center text-white transition-colors"
      >
        <img :src="social.files[0]?.img" :alt="social.title" class="w-5 h-5 object-contain" />
      </a>
    </div>

    <div class="container px-4.5 mx-auto gap-8 mb-1.25 flex flex-col items-center text-center">
      <h1 class="text-[28px] -mb-2 sm:text-[36px] lg:text-[48px] font-medium font-sf tracking-tight max-w-7xl">
        Тошкент Халқаро Университети Илмий онлайн журнали
      </h1>
      <p class="text-sm sm:text-xl text-white/85 max-w-2xl">
        Замонавий тадқиқотлар ва инновацион ғояларингизни дунёга етказинг
      </p>

      <div class="w-full max-w-2xl flex flex-col items-center gap-4 bg-white/10 border border-white/20 rounded-[10px] p-6.25">
        <div class="flex items-center justify-center">
          <div class="bg-white/12 rounded-full py-3.75 px-5.5 text-center">
            <span class="block text-xs md:text-sm text-white leading-tight">
              Энг охирги сон
            </span>
            <span class="block text-[20px] sm:text-[22px] lg:text-3xl leading-snug mt-0.5">
              № 12 (2025)
            </span>
          </div>

          <div class="w-px h-11 bg-white/20 mx-5 shrink-0" />

          <div class="text-left">
            <span class="block text-xs md:text-sm text-white/80 leading-tight">
              Нашр санаси
            </span>
            <span class="block text-sm md:text-[18px] font-medium">
              Ноябрь 2025
            </span>
          </div>
        </div>

        <BaseButton variant="white" class="h-12 px-8">
          <IconMessage class="shrink-0" />
          <span class="text-base">Янги сонга мақола юбориш</span>
        </BaseButton>
      </div>

      <div class="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 md:gap-6">
        <div
          v-for="item in stats"
          :key="item.id"
          class="bg-white/10 border flex flex-col gap-1.5 border-white/20 rounded-[10px] p-4 h-25.5 text-center"
        >
          <div class="text-[28px] sm:text-[36px] leading-none">
            {{ item.options }}
          </div>
          <div class="text-xs sm:text-[16px] text-white/80 mt-1.5">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
