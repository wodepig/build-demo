// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro:{
    // https://nitro.build/deploy/workers
    preset: 'node-server'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
