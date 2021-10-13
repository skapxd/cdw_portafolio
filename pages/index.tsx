import Image from 'next/image'
import { CardPostI } from '../components/CardPost/CardPost'
import { ListOfCardPost } from '../components/CardPost/ListOfCardPost'
import Style from './index.module.sass'

export async function getStaticProps() {
    const rest = await fetch('http://localhost:3000/post.json')
    const post = await rest.json()

    return {
        props: {
            data: post
        }
    }
}

interface HomeI {
    data: CardPostI[]
}

export default function Home(props: HomeI) {
    const { data } = props

    return (
        <div className={Style.firtsScreen}>
            <div className={Style.firtsScreen_logo}>
                <Image src="/assets/logo.svg" height="50" width="150" />
            </div>
            <h1 className={Style.firtsScreen_titulo}>Desarrollo web y móvil</h1>

            <ListOfCardPost
                className={Style.firtsScreen_listOfCardPost}
                data={data}
            />
        </div>
    )
}
