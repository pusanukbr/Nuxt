// store/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false, // За замовчуванням користувач не авторизований
    user: null, // Додано для зберігання даних користувача
  }),
  actions: {
    async register(email: string, password: string, username: string) { // Type: any - тимчасово
      // Виконуємо реєстрацію на сервері
      const { $axios } = useNuxtApp();
      try {
        const response =  await $axios.post("/api/v1/auth/register", { email, password, username });  

        this.user = response.data.user;
        localStorage.setItem('token', this.token); // Зберігаємо токен

        this.isAuthenticated = true;
      } catch (error) {
        console.error(error);
      }
    },

    login(userData: any) {
      this.isAuthenticated = true;
      this.user = userData; // Зберігаємо дані користувача
    },
    logout() {
      const { $axios } = useNuxtApp();

      this.isAuthenticated = false;
      this.user = null; // Очищаємо дані користувача
      localStorage.removeItem('token')
      delete $axios.defaults.headers.common['Authorization']
    },
  },
});