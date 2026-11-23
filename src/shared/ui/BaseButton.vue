<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'soft' | 'light' | 'white' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'lg',
  type: 'button',
  disabled: false,
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-brand hover:bg-brand/90 active:bg-brand/80 text-white'
    case 'secondary':
      return 'bg-[#F0F2F5] hover:bg-[#E5E7EB] active:bg-[#D1D5DB] text-[#1E2939]'
    case 'soft':
      return 'bg-brand-soft hover:bg-brand/15 active:bg-brand/30 text-brand'
    case 'light':
      return 'bg-brand-light hover:bg-brand-light/90 active:bg-brand-light/80 text-white'
    case 'white':
      return 'bg-white hover:bg-surface active:bg-surface/80 text-brand'
    case 'outline':
      return 'border border-border hover:border-brand active:bg-brand/10 text-navy hover:text-brand bg-transparent'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 px-2.5 text-xs gap-1.5 rounded-md'
    case 'md':
      return 'h-[42px] px-3.5 text-sm gap-2 rounded-lg'
    case 'lg':
      return 'h-12.5 px-4.5 text-[18px] gap-2.5 rounded-[10px]'
    default:
      return ''
  }
})
</script>

<template>
  <button
    :type="type || 'button'"
    :disabled="disabled"
    class="inline-flex py-3.5 items-center justify-center font-medium transition-colors duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none"
    :class="[variantClasses, sizeClasses]"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>