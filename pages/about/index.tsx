import Link from 'next/link'

import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'

import Style from './about.module.sass'
import staticImage from '../../routes/static_images'
import { abilitiesLink } from '../abilities'

export async function getStaticProps() {
    const { listPost, listTags, mostSeen } = await getBasicData()

    return {
        props: {
            listPost,
            listTags,
            mostSeen
        }
    }
}

interface AboutI {
    listPost: CardPostI[]
    mostSeen: CardPostI[]
    listTags: string[]
}

export default function About(props: AboutI) {
    const { listPost, listTags, mostSeen } = props

    return (
        <Layout listOfTags={listTags} mostSeen={mostSeen}>
            <div className={Style.about}>
                <img
                    src={staticImage().perfil}
                    alt="Manuel Londoño :D"
                    className={Style.about_img}
                />

                <h2 className={Style.about_name}>Manuel Londoño</h2>

                <p className={Style.about_shortDescription}>
                    Soy un desarrollador de software capaz de llevar una
                    aplicación de inicio a fin, con conocimientos en{' '}
                    <b>Frontend</b>, <b>Backend</b>, <b>Movíl</b>,{' '}
                    <b>Google Play</b>, <b>Google Cloud Platform</b>, ...{' '}
                    <Link href={abilitiesLink()}>
                        <a className={Style.about_seeMore}> ver mas. </a>
                    </Link>
                </p>
            </div>
        </Layout>
    )
}
