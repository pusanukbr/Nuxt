export default defineNuxtPlugin((nuxtApp) => {
  const loading = useState('globalLoading', () => false)

  nuxtApp.hook('page:start', () => {
    const now = new Date()
    const time = now.toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    const ms = now.getMilliseconds().toString().padStart(3, '0')
    console.log(`[${time}.${ms}] ➤ Loading started`)
    loading.value = true
  })

  nuxtApp.hook('page:finish', () => {
    const now = new Date()
    const time = now.toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    const ms = now.getMilliseconds().toString().padStart(3, '0')
    console.log(`[${time}.${ms}] ➤ Loading finished`)
    loading.value = false
  })
})
