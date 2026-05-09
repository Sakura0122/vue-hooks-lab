<script setup lang="ts">
import { ref } from 'vue'
import useTimeoutFn from './index.ts'

const defaultText = '请等待3s'
const text = ref(defaultText)
const { start, stop, isPending } = useTimeoutFn(() => {
  text.value = '结束!'
}, 3000)

const restart = () => {
  text.value = defaultText
  start()
}
</script>

<template>
  <p>{{ text }}</p>
  <p>{{ isPending ? '等待中' : '已停止' }}</p>
  <button @click="restart">重试</button>
  <button :disabled="!isPending" @click="stop">停止</button>
</template>
