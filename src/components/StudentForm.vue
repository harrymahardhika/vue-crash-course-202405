<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { student } = storeToRefs(appStore)
</script>

<template>
  <input type="text" v-model="student.name" />
  <input type="text" v-model="student.class" />
</template>
