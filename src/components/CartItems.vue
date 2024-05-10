<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const cartStore = useCartStore()
// const { items } = storeToRefs(cartStore)
const increment = (index: number) => {
  items.value[index].quantity++
}

const decrement = (index: number) => {
  items.value[index].quantity--
}

const items = ref([] as ItemWithChecks[])

onMounted(() => {
  items.value = cartStore.items.map(
    (item) =>
      ({
        ...item,
        quantity: 1,
        checked: false
      }) as ItemWithChecks
  )
})
</script>

<template>
  <ul>
    <template v-for="(item, index) in items" :key="index">
      <li>
        <div>Name: {{ item.name }}</div>
        <div>Price: {{ item.price }}</div>
        <div>
          <button @click="decrement(index)">-</button>
          <input type="text" :value="item.quantity" />
          <button @click="increment(index)">+</button>
          {{ item.checked ? 'Checked' : 'Not checked' }}
          {{ item.cccc ? item.aaaa : item.bbbb }}
        </div>
      </li>
    </template>
  </ul>
</template>
