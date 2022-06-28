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
  disabled?: boolean | undefined
  loading?: boolean | undefined
}

const props = withDefaults(defineProps<RingButtonProps>(), {
  disabled: false,
  loading: false,
})

const emit = defineEmits(ButtonEmits)
const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const classes = computed(() => {
  return [
    props.disabled ? 'is-disabled' : '',
    props.loading ? 'is-loading' : '',
    props.type ? `ring-btn-${props.type}` : '',
    props.size ? `ring-btn-${props.size}` : '',
  ]
})
</script>

<template>
  <button
    class="ring-btn"
    :disabled="props.disabled"
    :loading="props.loading"
    :class="classes"
    @click="onClick"
  >
    <div v-if="props.loading" class="loading-background"></div>
    <slot></slot>
  </button>
</template>
