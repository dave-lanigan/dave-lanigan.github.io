// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@vesp/nuxt-fontawesome'],
  // css: [
  //   '@fortawesome/fontawesome-svg-core/styles.css'
  // ],
  fontawesome: {
    icons: {
      solid: ['envelope', 'code', 'code-compare', 'laptop-code'],
      brands: [
        'github',
        'linkedin',
        'whatsapp',
        'python',
        'golang',
        'vuejs',
        'upwork',
        'react',
        'aws',
        'r-project'
      ]
    }
  },
  fonts: {
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'Nunito', provider: 'google', global: true },
    ]
  }
})
