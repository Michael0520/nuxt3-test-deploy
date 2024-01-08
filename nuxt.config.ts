import { posix } from 'node:path'
import { useNuxt } from '@nuxt/kit'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

// const path = require('node:path')

export default defineNuxtConfig({
  build: {
    analyze: {},
  },
  // nitro
  vite: {
    build: {
      rollupOptions: {
        // output: {
        //   entryFileNames: `assets/[name].js`,
        //   chunkFileNames: `assets/[name].js`,

        //   assetFileNames: (assetInfo) => {
        //     if (assetInfo.name.endsWith('.css'))
        //       return 'assets/css/[name][extname]'

        //     if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name))

        //       return 'assets/img/[name][extname]'

        //     if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name))

        //       return 'assets/fonts/[name][extname]'

        //     if (/\.(mp4|webm|ogv)$/i.test(assetInfo.name))

        //       return 'assets/videos/[name][extname]'

        //     return 'assets/[name][extname]'
        //   },
        // },
        output: {
          entryFileNames: () => posix.join(String(useNuxt().options.vite.build?.assetsDir), '[name].js'),
          chunkFileNames: () => posix.join(String(useNuxt().options.vite.build?.assetsDir), '[name].js'),
          assetFileNames: (assetInfo) => {
            const resolver = (filePath: string) => posix.join(String(useNuxt().options.vite.build?.assetsDir), filePath)
            const assetName = assetInfo.name ?? ''

            if (assetName.endsWith('.css'))
              return resolver('/css/[name][extname]')

            if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetName))
              return resolver('/img/[name][extname]')

            if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetName))
              return resolver('/fonts/[name][extname]')

            if (/\.(mp4|webm|ogv)$/i.test(assetName))
              return resolver('/videos/[name][extname]')

            return resolver('[name][extname]')
          },
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
