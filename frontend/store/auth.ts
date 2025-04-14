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
      const loading = useState('globalLoading', () => false);


      try {
        loading.value = true;
        const response = await $axios.get('/api/v1/auth/getUser');
        this.user = response.data;
        this.isAuthenticated = true;
      } catch (error) {
        $errorLog(error);
      } finally {
        loading.value = false;
      }
    },

    async register(email: string, password: string, username: string) {
      const { $axios, $errorLog } = useNuxtApp();

      console.log('email, password, username', email, password, username);

      try {
        const response =  await $axios.post("/api/v1/auth/register", { email, password, username });

        localStorage.setItem('token', response.data.token); // Зберігаємо токен
        this.user = response.data.user;
        this.isAuthenticated = true;

        return response;
      } catch (error) {
        $errorLog(error);
      }
    },

    async login(email: string, password: string) {
      const { $axios, $errorLog } = useNuxtApp();

      try {
        const response =  await $axios.post("/api/v1/auth/login", { email, password });  
        console.log('response', response);
        localStorage.setItem('token', response.data.token); // Зберігаємо токен
        this.user = response.data.user;
        this.isAuthenticated = true;

        return response;
      } catch (error) {
        $errorLog(error);
      }
    },
    logout() {
      const { $axios } = useNuxtApp();

      localStorage.removeItem('token');
      this.user = null; // Очищаємо дані користувача
      this.isAuthenticated = false;


      delete $axios.defaults.headers.common['Authorization']
    },
  },
});