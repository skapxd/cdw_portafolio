/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        domains: ['localhost:3000/img']
    },
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL', 'es-ES'],
        defaultLocale: 'es-ES',
        localeDetection: true
    }
}
