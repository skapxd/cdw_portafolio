/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL', 'es-ES'],
    defaultLocale: 'es-ES',
    localeDetection: true
  }
}
