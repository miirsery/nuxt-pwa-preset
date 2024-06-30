
const sw = process.env.SW === 'true'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
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
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
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