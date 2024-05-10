import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([
    { id: 1, name: 'Apple', price: 1.25, quantity: 2 },
    { id: 2, name: 'Banana', price: 0.75, quantity: 3 },
    { id: 3, name: 'Cherry', price: 2.5, quantity: 1 }
  ] as CartItem[])

  const total = computed(() => {
    return items.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  })

  const totalItems = computed(() => {
    return items.value.length
  })

  watch(total, (value) => {
    alert(`Total price: ${value}`)
  })

  return {
    items,
    total,
    totalItems
  }
})
