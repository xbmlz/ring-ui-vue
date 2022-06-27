<!-- done -->
<script lang="ts">
export default {
  name: 'RingButton',
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import './index.scss'
import { ButtonEmits, ButtonSize, ButtonType } from './interface'

export interface RingButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: string | boolean
}

const props = withDefaults(defineProps<RingButtonProps>(), {
  disabled: false,
})

const emit = defineEmits(ButtonEmits)
const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const classes = computed(() => {
  return [
    {
      'ring-btn-disabled': props.disabled,
    },
    props.type ? `ring-btn-${props.type}` : '',
    props.size ? `ring-btn-${props.size}` : '',
  ]
})
</script>

<template>
  <button class="ring-btn" :class="classes" @click="onClick">
    <slot></slot>
  </button>
</template>
