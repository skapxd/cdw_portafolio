import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/normalize.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#0f0f12" />
            </Head>

            <Component {...pageProps} />
        </>
    )
}
export default MyApp
