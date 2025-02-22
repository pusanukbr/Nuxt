export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore(); // Отримуємо стейт авторизації (замінити на свій метод)

  if (!auth.isAuthenticated) {
    return navigateTo("/login"); // Перенаправлення на сторінку входу
  }
});
