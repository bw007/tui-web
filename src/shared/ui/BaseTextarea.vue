<script setup lang="ts">
import { computed, useId } from 'vue'

interface Props {
  label?: string
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  rows?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  rows: 4,
  disabled: false,
})

const model = defineModel<string>()
const textareaId = useId()

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'p-2.5 text-xs rounded-md'
    case 'md':
      return 'p-3 text-sm rounded-lg'
    case 'lg':
      return 'px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-[18px] rounded-lg'
    default:
      return ''
  }
})
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" :for="textareaId" class="text-base sm:text-[18px] font-medium text-[#1E2939]">
      {{ label }}
    </label>

    <textarea
      :id="textareaId"
      v-model="model"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      class="bg-white border border-[#E5E7EB] focus:border-brand text-[#1E2939] resize-none transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:bg-gray-50"
      :class="[ sizeClasses ]"
    />
  </div>
</template>