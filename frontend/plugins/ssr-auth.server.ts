import { useAuthStore } from "../store/auth";

export default defineNuxtPlugin(async () => {
    const auth = useAuthStore();
    await auth.fetchUser();
  });
  