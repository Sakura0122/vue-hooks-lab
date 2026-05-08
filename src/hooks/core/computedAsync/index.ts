import { readonly, ref, watchEffect } from 'vue'

const computedAsync = <T>(getter: () => Promise<T>, initialValue?: T) => {
  const state = ref(initialValue)

  watchEffect(async (onCleanup) => {
    let expired = false

    onCleanup(() => {
      expired = true
    })
    
    try {
      const result = await getter()

      if (expired) return

      state.value = result
    } catch (error) {
      if (expired) return

      console.error(error)
    }
  })

  return readonly(state)
}

export default computedAsync
