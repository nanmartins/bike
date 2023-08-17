<template>
  <div class="bg-grey-darken-4 fill-height">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center">

        <div>
          <h1>Products from Strapi API:</h1>
          <ul>
            <li v-for="(product) in products.data" :key="product.id">
              <p>Product name: {{ product.attributes.product_name }}</p>
              <p>Product description: {{ product.attributes.product_desc }}</p>
              <p>ID: {{ product.id }}</p>
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

const products = ref({
  data: []
});

// products fetch
const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/products');
    products.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
  }
};

onMounted(fetchProducts);
</script>
