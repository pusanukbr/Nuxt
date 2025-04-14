import { useAuthStore } from "../store/auth";

export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore();
  const globalLoading = useState('globalLoading', () => false);

  // якщо вже є користувач — не повторюй
  if (auth.isAuthenticated || auth.user) return;

  try {
    globalLoading.value = true; // 👉 показати лоадер
    await auth.fetchUser();
  } catch (e) {
    // optionally handle error
  } finally {
    globalLoading.value = false; // 👉 сховати лоадер
  }
});
