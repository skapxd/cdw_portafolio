import { Header } from '../components/Header/Header'
import type { AppProps } from 'next/app'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    )
}
export default MyApp
