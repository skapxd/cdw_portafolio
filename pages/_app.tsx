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
    const data = await rest.json()

    const post = JSON.parse(data)

    console.log(post)

    return {
        props: {
            data: post
        }
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    const { data } = pageProps

    console.log('MyApp: props', pageProps)
    console.log('MyApp: props.list', pageProps.list)

    const listTags = ['Móvil', 'Web', 'Deploy', 'GCP', 'Heroku', 'holaaaaa']

    return (
        <>
            <Header />
            <div className={Style.mainContainer}>
                <Component {...pageProps} />

                <ExploreTags listOfTags={listTags} />
                <MostSeen list={pageProps.list} />
                <Footer />
            </div>
        </>
    )
}
export default MyApp
