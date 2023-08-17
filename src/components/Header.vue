<template>
  <v-app-bar height="74px" class="bg-nav" flat>
    <v-container class="py-3">
      <v-responsive class="align-center text-start">
        <div class="d-flex flex-row align-center justify-space-between">
          <!-- <h1>Nav</h1> -->
          <v-img
            :src="bikeLogo"
            max-width="50px"
            class="pa-0 ma-0 justify-start bg-black rounded-xl"
          ></v-img>
          <v-row justify="end" width="200px" class="mr-1">

            <div @click="themeStore.toggleTheme" class="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" class="rounded-xl mr-3" style="cursor: pointer;">
                <title>theme</title>
                <path :fill="iconFillColor" d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />
              </svg>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px">
              <title>account</title>
              <path :fill="iconFillColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
            </svg>

          </v-row>
        </div>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useThemeStore } from '@/store/theme'
import { computed, onMounted, watch } from 'vue'
import bikeLogo from '@/assets/bike-logo2.png'

const themeStore = useThemeStore()

onMounted(() => {
  applyBodyClass(themeStore.theme)
})

// Apply background color on body based on theme color
const applyBodyClass = (theme) => {
  const body = document.querySelector('body')
  if (theme === 'dark') {
    body.classList.remove('body-light')
    body.classList.add('body-dark')
  } else {
    body.classList.remove('body-dark')
    body.classList.add('body-light')
  }
}

// Change icon color
const iconFillColor = computed(() => {
  return themeStore.theme === 'dark' ? '#F3F9E3' : '#121212'
})

// Watcher changes on theme color
watch(() => themeStore.theme, (newTheme, oldTheme) => {
  applyBodyClass(newTheme)
})
</script>

<style>
.body-dark {
  background: #121212;
}
.body-light {
  background: #F3F9E3;
}
</style>
