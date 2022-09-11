import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/normalize.css'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
        <>
            <Head>
                <meta name="theme-color" content="#0f0f12" />
                <meta name="application-name" content="skapxd.dev" />
                <meta
                    name="description"
                    content="Artículos, vídeos, recursos y tutoriales sobre Desarrollo Web, Frontend, JavaScript ☕️, React ⚛️, CSS 🎨 y Performance Web ⚡️"
                />
                <title>Skapxd</title>
            </Head>

            <Component {...pageProps} />
        </>
  )
}
export default MyApp
