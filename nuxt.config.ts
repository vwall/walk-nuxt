// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: { compatibilityVersion: 4 },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    'nuxt-auth-utils',
    '@formkit/auto-animate/nuxt',
  ],
  devtools: { enabled: true },
  googleFonts: {
    preload: true,
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  runtimeConfig: {
    API_URL: process.env.API_URL,
    session: {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV != 'development',
      },
    },

    passwordHashRounds: 12,
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'always-multiline',
      },
    },
  },
})
