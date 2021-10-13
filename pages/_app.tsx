import type { AppProps } from 'next/app'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Fotter/Footer'
import { ExploreTags } from '../components/ExploreTags/ExploreTags'

import '../styles/normalize.css'
import '../styles/globals.scss'
import Style from './_app.module.sass'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div className={Style.mainContainer}>
                <Component {...pageProps} />

                <ExploreTags />

                <Footer />
            </div>
        </>
    )
}
export default MyApp
