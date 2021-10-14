import type { AppProps } from 'next/app'
import { Header } from '../components/lv_2/Header/Header'
import { Footer } from '../components/lv_2/Fotter/Footer'
import { ExploreTags } from '../components/lv_2/ExploreTags/ExploreTags'

import '../styles/normalize.css'
import '../styles/globals.scss'
import Style from './_app.module.sass'
import { MostSeen } from '../components/lv_2/MostSeen/MostSeen'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div className={Style.mainContainer}>
                <Component {...pageProps} />

                <ExploreTags />
                <MostSeen />
                <Footer />
            </div>
        </>
    )
}
export default MyApp
