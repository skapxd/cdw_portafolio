/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL', 'es-ES'],
    defaultLocale: 'es-ES',
    localeDetection: true
  },
  redirects: async () => [
    {
      permanent: true,
      source: '/curriculum.figma',
      destination: 'https://www.figma.com/file/sBfI5tPy3a9Pp6O7hrSNuM/Portafolio'
    }
  ]
}
