import type { AppProps } from 'next/app'
import { Header } from '../components/lv_2/Header/Header'
import { Footer } from '../components/lv_2/Fotter/Footer'
import { ExploreTags } from '../components/lv_2/ExploreTags/ExploreTags'
import { MostSeen } from '../components/lv_4/MostSeen/MostSeen'

import '../styles/normalize.css'
import '../styles/globals.scss'
import Style from './_app.module.sass'

export async function getStaticProps() {
    const rest = await fetch('http://localhost:3000/post.json')
    const post = await rest.json()

    return {
        props: {
            data: post
        }
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    console.log(pageProps)

    return (
        <>
            <Header />
            <div className={Style.mainContainer}>
                <Component {...pageProps} />

                <ExploreTags />
                <MostSeen data={[]} />
                <Footer />
            </div>
        </>
    )
}
export default MyApp
