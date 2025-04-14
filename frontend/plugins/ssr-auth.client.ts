import { useAuthStore } from "../store/auth";

export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();

  // якщо сторінка вже відрендерилась — не повторюй
  if (auth.isAuthenticated || process.server) return;

  await auth.fetchUser();
});
