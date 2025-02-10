import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/seo', '@pinia/nuxt','@nuxt/fonts',],
  i18n: {
    vueI18n: './i18n.config.ts',
    langDir: './lang/', // ВАЖЛИВО: переконайся, що папка `lang/` існує
    lazy: true,
    restructureDir: false,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      { code: 'en', name: 'English', file: 'en-US.js' },
      { code: 'uk', name: 'Українська', file: 'uk-UA.js' },
    ],
  },
  fonts: {
    families:[
      { name: 'Montserrat', provider: 'google' },
    ]
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/_variables.scss" as *;
            @use "~/assets/scss/_mixins.scss" as *;
           `
        }
      }
    }
  }
})