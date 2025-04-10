import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'uk-UA',
  title: 'Документація Frontend',
  description: 'Vue 3 + Nuxt 3 + Node.js проект',
  theme: defaultTheme({
    sidebar: {
      '/guide/': [
        {
          text: 'Посібник',
          children: [
            '/guide/index.md',
            '/guide/project-structure.md',
            '/guide/usage.md',
            '/guide/environment.md',
            '/guide/routing.md',
            '/guide/state.md',
            '/guide/i18n.md',
            '/guide/components.md',
            '/guide/styles.md'
          ]
        }
      ],
      '/tips/': [
        {
          text: 'Корисне',
          children: ['/tips/troubleshooting.md']
        }
      ]
    },
    navbar: [
      { text: 'Посібник', link: '/guide/' },
      { text: 'Поради', link: '/tips/' }
    ]
  })
})
