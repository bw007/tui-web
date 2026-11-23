<script setup lang="ts">
import { computed, useId } from 'vue'

interface Props {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'number'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'lg',
  disabled: false,
})

const model = defineModel<string | number>()
const inputId = useId()

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 px-3 text-xs rounded-md'
    case 'md':
      return 'h-[42px] px-3.5 text-sm rounded-lg'
    case 'lg':
      return 'px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-[18px] rounded-lg'
    default:
      return ''
  }
})
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" :for="inputId" class="text-base sm:text-[18px] font-medium text-[#1E2939]">
      {{ label }}
    </label>

    <input
      :id="inputId"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="bg-white border-[#E5E7EB] focus:border-brand border text-[#1E2939] transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:bg-gray-50"
      :class="[sizeClasses]"
    />
  </div>
</template>