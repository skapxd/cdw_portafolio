import { CardPost, CardPostI } from '../components/lv_3/CardPost/CardPost'
import { ListOfCardPost } from '../components/lv_3/ListOfCardPost/ListOfCardPost'
import Style from './index.module.sass'

export async function getStaticProps() {
    const rest = await fetch('http://localhost:3000/post.json')
    const post = await rest.json()
    console.log('getStaticProps Home: ', post)

    return {
        props: {
            // list: [1, 2, 3, 4]
            list: post
        }
    }
}

interface HomeI {
    list: CardPostI[]
}

export default function Home(props: any) {
    const { list } = props

    console.log('Home: ', props)

    return (
        <div className={Style.firtsScreen}>
            <div className={Style.firtsScreen_logo}>
                <img src="/assets/logo.svg" height="50" width="150" />
            </div>
            <h1 className={Style.firtsScreen_titulo}>Desarrollo web y móvil</h1>

            <ListOfCardPost
                className={Style.firtsScreen_listOfCardPost}
                list={list}
            />
        </div>
    )
}
