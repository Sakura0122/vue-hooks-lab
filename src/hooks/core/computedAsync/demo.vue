<script setup lang="ts">
import { ref } from 'vue'
import computedAsync from './index.ts'

const count = ref(0)
const getData = () => {
  const res = {
    code: 200,
    data: count.value,
  }
  const randomDelay = (Math.random() * 4 + 1) * 1000
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res)
    }, randomDelay)
  })
}

const data = computedAsync(getData)
</script>

<template>
  <div>{{ data }}</div>
  <div>{{ count }}</div>
  <button @click="count++">+1</button>
</template>

<style scoped></style>
