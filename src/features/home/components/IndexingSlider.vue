<script setup lang="ts">
import IconDown from '@/shared/ui/icons/IconDown.vue'
import { homeStore } from '@/features/home/stores/home'
import { storeToRefs } from 'pinia'

const home = homeStore()
const { bases } = storeToRefs(home)
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 py-30 flex flex-col gap-10 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        Халқаро индексация базалари
      </h2>
      <p class="text-slate text-lg">
        Журналимиз қуйидаги халқаро маълумот базаларида индексланган
      </p>
    </div>

    <div class="flex flex-col justify-between gap-6">
      <div class="relative flex justify-between items-start gap-6">
        <button class="w-10 h-10 shadow-lg absolute top-1/3 -left-16 flex items-center justify-around rounded-full bg-white cursor-pointer hover:bg-amber-50/50">
          <IconDown class="rotate-90 text-dark" />
        </button>
        <div v-for="item in bases" :key="item.id" class="flex bg-[#F9FAFB] border border-[#E5E7EB] rounded-[10px] p-3 justify-center items-center cursor-pointer hover:bg-amber-50/20">
          <img :src="item.files[0].img" :alt="item.id" class="object-contain" />
        </div>
        <button class="w-10 h-10 shadow-lg absolute top-1/3 -right-16 flex items-center justify-around rounded-full bg-white cursor-pointer hover:bg-amber-50/50">
          <IconDown class="-rotate-90 text-dark" />
        </button>
      </div>
      <div class="flex gap-2 justify-center items-center">
        <span v-for="(item, index) in bases" :key="index" class="bg-border w-2 h-2 rounded-full shrink-0" :class="item.isActive ? 'w-8 bg-brand' : ''"></span>
      </div>
    </div>
    <p class="text-base text-dark/65">Мақолаларингиз халқаро даражада тан олинади ва кенг аудиторияга етиб боради</p>
  </section>
</template>
