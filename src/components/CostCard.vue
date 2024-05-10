<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { total, totalItems } = storeToRefs(cartStore)
</script>

<template>
  <h2>Cost Card: {{ totalItems }} items</h2>
  <h3>Total Price:</h3>
  <div>{{ total }}</div>
</template>
