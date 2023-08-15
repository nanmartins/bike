<template>
  <!-- <div class="bg-grey-darken-4"> -->
    <v-container class="py-0">
      <v-responsive class="align-center text-start">
        <div class="d-flex flex-row align-center justify-space-between">
          <!-- <h1>Nav</h1> -->
          <v-img
            :src="bikeLogo"
            max-width="100px"
            class="d-flex justify-start pa-0 ma-0 justify-start"
          ></v-img>
          <h2>Menu</h2>
        </div>
      </v-responsive>
    </v-container>
  <!-- </div> -->
</template>

<script setup>
import bikeLogo from  '@/assets/bike-logo.png'
</script>
