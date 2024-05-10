import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // state
  const schoolName = ref('XYZ School')
  const students = ref([
    { name: 'John Doe', class: 'XII', city: 'New York', gender: 'male' },
    { name: 'Jane Doe', class: 'XII', city: 'Los Angeles', gender: 'female' },
    { name: 'John Smith', class: 'XII', city: 'Chicago', gender: 'male' }
  ])

  const student = ref({
    name: 'John Doe',
    class: 'XII',
    city: 'New York',
    age: 9
  } as Student)

  // actions
  const someFunction = () => {
    'do something'
  }

  return {
    schoolName,
    students,
    student,
    someFunction
  }
})
