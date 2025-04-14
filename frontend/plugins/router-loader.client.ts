export default defineNuxtPlugin((nuxtApp) => {
  const loading = useState('globalLoading', () => false)

  nuxtApp.hook('page:start', () => {
    console.log('Loading started');
    
    loading.value = true
  })
  nuxtApp.hook('page:finish', () => {
    console.log('Loading finished');
    loading.value = false
  })
})
