<template>
  <div class="buttons">
    <RingButton>Default</RingButton>
    <RingButton type="primary">Primary</RingButton>
    <RingButton type="danger">Danger</RingButton>
    <RingButton disabled>Disabled</RingButton>
    <RingButton type="primary" disabled>Primary disabled</RingButton>
    <RingButton type="primary" size="small">Primary small</RingButton>
    <RingButton type="primary" size="large">Primary large</RingButton>
    <RingButton type="primary" loading>Primary loading</RingButton>
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
