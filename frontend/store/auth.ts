// store/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false, // За замовчуванням користувач не авторизований
    user: null, // Додано для зберігання даних користувача
  }),
  actions: {
    async fetchUser() {
      const { $axios, $errorLog } = useNuxtApp();

      try {
        const response = await $axios.get('/api/v1/auth/getUser');
        this.user = response.data;
        this.isAuthenticated = true;
      } catch (error) {
        $errorLog(error);
      }
    },

    async register(email: string, password: string, username: string) { // Type: any - тимчасово
      const { $axios } = useNuxtApp();

      console.log('email, password, username', email, password, username);

      try {
        const response =  await $axios.post("/api/v1/auth/register", { email, password, username });  

        this.user = response.data.user;
        localStorage.setItem('token', response.data.token); // Зберігаємо токен

        this.isAuthenticated = true;
      } catch (error) {
        console.log('Помилка реєстрації:', error);
        console.error(error);
      }
    },

    async login(email: string, password: string) {
      const { $axios } = useNuxtApp();

      try {
        const response =  await $axios.post("/api/v1/auth/login", { email, password });  

        localStorage.setItem('token', this.token); // Зберігаємо токен

        this.user = response.data.user;
        this.isAuthenticated = true;
      } catch (error) {
        console.error(error);
      }
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