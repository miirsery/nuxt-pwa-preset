// https://nuxt.com/docs/api/configuration/nuxt-config
import * as fs from "node:fs";
import * as path from "node:path";

const SSL_CERT = process.env.NUXT_NITRO_SSL_CERT;
const SSL_KEY = process.env.NUXT_NITRO_SSL_KEY;

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],
  devServer: {
    https: SSL_CERT && SSL_KEY ? {
      key: fs.readFileSync(path.resolve(__dirname, SSL_CERT)).toString(),
      cert: fs.readFileSync(path.resolve(__dirname, SSL_KEY)).toString()
    } : {}
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: "Nuxt App",
      short_name: "Nuxt App",
      description: "Nuxt App",
      theme_color: "#ffffff",
      orientation: 'natural',
      display: 'fullscreen',
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
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})