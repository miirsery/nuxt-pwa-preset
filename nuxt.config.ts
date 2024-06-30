
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Nuxt App",
      short_name: "Nuxt App",
      description: "Nuxt App",
      theme_color: "#ffffff",
      orientation: 'natural',
      display: 'standalone',
      icons: [{
        "src": "qwe-192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      }],
      screenshots: [
        {
          "src": "qwe-640-320.png",
           "sizes": "640x320",
           "type": "image/png",
           "label": "Application",
           form_factor: 'wide'
         },
         {
          "src": "qwe-640-320.png",
           "sizes": "640x320",
           "type": "image/png",
           "label": "Application",
           form_factor: 'narrow',
         }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})