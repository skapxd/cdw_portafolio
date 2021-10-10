import { Header } from '../components/Header/Header'
import type { AppProps } from 'next/app'
import '../styles/normalize.css'
import '../styles/globals.scss'
import { Footer } from '../components/Fotter/Footer'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
export default MyApp
