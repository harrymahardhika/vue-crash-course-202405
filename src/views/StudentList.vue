<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

defineProps({
  schoolName: String
})
</script>

<template>
  <h1>Student List of {{ appStore.schoolName }}</h1>

  <ul>
    <template v-for="student in appStore.students" :key="student.name">
      <li v-if="student.gender === 'female'">
        <div>Name: {{ student.name }}</div>
        <div>Class: {{ student.class }}</div>
        <div>City: {{ student.city }}</div>
      </li>
    </template>
  </ul>
</template>
