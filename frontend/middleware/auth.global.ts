import { useAuthStore } from '../store/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    const userLoaded = useState('globalLoading', () => false);
  
    if (!userLoaded.value) {
      try {
        await authStore.fetchUser(); // твій запит
      } catch (e) {
        // можна нічого не робити
      } finally {
        userLoaded.value = true;
      }
    }
  });
  