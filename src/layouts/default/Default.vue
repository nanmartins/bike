<template>
  <v-app :theme="themeStore.theme">
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import { useThemeStore } from '@/store/theme'

  const themeStore = useThemeStore()
</script>
