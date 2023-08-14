<template>
  <v-main>
    <Header />
    <router-view />
    <Footer />
  </v-main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
