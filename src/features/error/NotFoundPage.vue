<script setup lang="ts">
import BaseButton from '@/shared/ui/BaseButton.vue'

</script>

<template>
  <section
    class="relative min-h-[calc(100vh-280px)] flex items-center justify-center font-sf py-12 sm:py-16 lg:py-24 px-4.5 overflow-hidden bg-linear-to-b from-surface/50 via-white to-surface/30">
    <div class="container relative z-10 mx-auto max-w-4xl text-center">
      <div class="relative inline-flex items-center justify-center mb-6 select-none">
        <span
          class="text-2xl sm:text-3xl lg:text-[80px] font-bold tracking-tighter leading-none bg-linear-to-r from-brand via-[#2B58A1] to-navy bg-clip-text text-transparent drop-shadow-xs">
          404
        </span>
      </div>

      <h1 class="text-xl md:text-2xl lg:text-[40px] font-bold text-navy tracking-tight leading-tight mb-3 sm:mb-4">
        {{ $t('notFound.title') }}
      </h1>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16">
        <RouterLink to="/" class="w-full sm:w-auto">
          <BaseButton variant="primary" size="lg" class="w-full sm:w-auto px-6 sm:px-8 shadow-sm">
            <template #icon-left>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </template>
            <span>{{ $t('notFound.homeButton') }}</span>
          </BaseButton>
        </RouterLink>
      </div>
    </div>
  </section>
</template>