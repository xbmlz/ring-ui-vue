<template>
  <div class="buttons">
    <RingButton>Default</RingButton>
    <RingButton type="primary">Primary</RingButton>
  </div>
</template>

<script lang="ts">
export default { name: 'examples' }
</script>

<script setup lang="ts">
import { RingButton } from '../packages/index'
</script>

<style scoped lang="scss">
.buttons {
  button {
    margin: 8px;
  }
}
</style>
