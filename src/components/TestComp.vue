<template>
  <div class="bg-grey-darken-4 fill-height">
    <v-container class="fill-height">
      <v-responsive class="align-center text-start">
        <div>
          <h1>Itens da API do Strapi:</h1>
          <ul>
            <li v-for="product in api.data" :key="product.id">
              <p>Nome do Produto: {{ product.attributes.product_name }}</p>
              <p>Descrição do Produto: {{ product.attributes.product_desc }}</p>
              {{ product.id }}
            </li>
          </ul>
        </div>
      </v-responsive>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const api = ref({
  data: []
});

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/products');
    api.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
  }
};

onMounted(fetchData);
</script>
