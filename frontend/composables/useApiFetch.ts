export function useApiFetch<T>(url: string, options = {}) {
  const loading = useState<boolean>('globalLoading', () => false)

  return useAsyncData<T>(url, async () => {
    loading.value = true
    try {
      return await $fetch<T>(url, options)
    } finally {
      loading.value = false
    }
  })
}
