import { onScopeDispose, readonly, ref } from 'vue'

const useTimeoutFn = (callback: () => void, delay: number, immediate = true) => {
  const isPending = ref(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  const stop = () => {
    if (timer === undefined) return

    clearTimeout(timer)
    timer = undefined
    isPending.value = false
  }

  const start = () => {
    stop()
    isPending.value = true

    timer = setTimeout(() => {
      timer = undefined
      isPending.value = false
      callback()
    }, delay)
  }

  if (immediate) {
    start()
  }

  onScopeDispose(stop)

  return {
    start,
    stop,
    isPending: readonly(isPending),
  }
}

export default useTimeoutFn
