// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Asset Studio for Creators',
            meta: [
                { name: 'description', content: 'Create non-fungible and semi-fungible tokens.' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            script: [
                { src: '/js/matomo.js' },
            ],
        },
        baseURL: '/asset',
    },

    /* Application Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss',

        /* Pinia */
        '@pinia/nuxt',

        /* Internationalization for Nuxt */
        '@nuxtjs/i18n',
    ],

    /* Route Rules */
    routeRules: {
        /* Add CORS headers to root. */
        // NOTE: We need this to make <token>.json files available to web apps.
        '/**': { cors: true },
    },
})
