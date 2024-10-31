// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],

  strapi: {
    url: process.env.STRAPI_URL || 'https://salty-papayas-know.loca.lt',
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt'
  },

  routeRules: {
    "/blog/**": { swr: true }
  }
});