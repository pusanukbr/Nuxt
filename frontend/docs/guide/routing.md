# Маршрутизація

## Автоматична генерація Nuxt

Nuxt генерує маршрути з папки `pages`. Наприклад:

- `pages/index.vue` → `/`
- `pages/login.vue` → `/login`
- `pages/post/[id].vue` → `/post/:id`

## Динамічні маршрути

```bash
/pages/post/[id].vue → /post/:id
/pages/user/[id].vue → /user/:id
