<script setup lang="ts">
import IconBook from '@/shared/ui/icons/IconBook.vue'
import IconDownload from '@/shared/ui/icons/IconDownload.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'
import { useHomeStore } from '../stores/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { gallery } = storeToRefs(homeStore)
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 pb-20">
    <div class="relative overflow-hidden rounded-[14px] flex items-center">
      <img
        src="@/assets/banner-img.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-dark/60 backdrop-blur-[1px]" />

      <div class="relative z-10 w-full p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex flex-col sm:flex-row items-center gap-6">
          <div class="shrink-0 rounded-lg overflow-hidden flex shadow-md bg-white">
            <div class="w-12.5 bg-[#3563B8] flex items-center justify-center text-white shrink-0">
              <IconBook />
            </div>
            <a
              target="_blank"
              :href="gallery?.data[0]?.files[0]?.img"
              download
              class="flex-1 p-4 flex items-center justify-center"
            >
              <img
                :src="gallery?.data[0]?.files[1]?.img"
                alt="Journal Cover"
                class="w-42 h-59.25 object-contain"
              />
            </a>
          </div>

          <h3 class="text-white text-lg md:text-[24px] font-medium leading-[1.35] max-w-85 text-center sm:text-left">
            {{ gallery?.data[0]?.title }}
          </h3>
        </div>

        <a
          target="_blank"
          :href="gallery?.data[0]?.files[0]?.img"
          download
        >
          <BaseButton>
            <IconDownload />
            <span>{{ $t('buttons.downloadJournal') }}</span>
          </BaseButton>
        </a>
      </div>
    </div>
  </section>
</template>
