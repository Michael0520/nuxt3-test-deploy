import { pwa } from './config/pwa'
import { appDescription } from './constants/index'
const path = require('path');

export default defineNuxtConfig({
  // TODO: Remove hash values from output file names generated after running `npm run build`.
  // Modify the output file naming to remove the hash at the end.
  // For example: demoasjd9d19.css => demo.css

  // If using Astro or Vue, you can use this method to remove hash values.
  // Example for Vite build configuration:
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         manualChunks: 'app',
  //         entryFileNames: `assets/[name].js`,
  //         chunkFileNames: `assets/[name].js`,
  //         assetFileNames: `assets/[name].[ext]`,
  //       },
  //     },
  //   },
  // },

  build: {
    analyze: {},
    // To remove hash values in Nuxt 2, you can use the following configuration:
    // https://v2.nuxt.com/docs/configuration-glossary/configuration-build/#filenames
    // filenames: {
    //   app: () => '[name].js',
    //   chunk: () => '[name].js',
    //   css: () => '[name].css',
    //   img: () => '[path][name].[ext]',
    //   font: () => '[path][name].[ext]',
    //   video: () => '[path][name].[ext]'
    // }

    // Try it with stackflow answer
    // https://stackoverflow.com/questions/77656473/how-to-custom-output-file-naming-in-nuxt-3/77656507#77656507
    // Rollup options to control output file names
    rollupConfig: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          // Define naming convention based on the file type
          if (/\.css$/i.test(name)) {
            return '[name].css';
          }
          if (/\.(pngjpe?ggifsvgwebp)$/i.test(name)) {
            return 'img/[name][extname]';
          }
          if (/\.(woffwoff2eotttfotf)$/i.test(name)) {
            return 'fonts/[name][extname]';
          }
          if (/\.(mp4webmogv)$/i.test(name)) {
            return 'videos/[name][extname]';
          }
          // Fallback for other assets
          return '[name][extname]';
        },
      },
    }, 
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
  ],

  experimental: {
    // When using `generate`, payload JS assets are included in the service worker precache manifest,
    // but they may be missing when offline. Disabling extraction until it's fixed.
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    // preset: 'server',
    // output: {
    //   serverDir: 'output/server',
    //   publicDir: 'output/public',
    // },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
    // Here, you can only adjust the output folder naming.
    // https://nitro.unjs.io/config#output
    // output: {
    //   publicDir: path.join(__dirname, '.output/static')
    // }
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
