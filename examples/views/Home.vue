<template>
  <div class="home">
    <div class="side-pane">
      <nav>
        <router-link
          v-for="(demo, index) of demos"
          :key="index"
          :to="{ name: demo.name }"
          class="nav-link"
        >
          {{ demo.meta.label }}
        </router-link>
      </nav>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'home' }
</script>

<script setup lang="ts">
import demos from '../demo-routes'
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  .side-pane {
    flex: auto 0 0;
    overflow-y: auto;
    .nav-link {
      display: block;
      padding: 12px;
      min-width: 150px;
    }
  }

  .content {
    flex: 100% 1 1;
    width: 0;
    overflow: auto;
  }
}
</style>
