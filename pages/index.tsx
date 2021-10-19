import { CardPost, CardPostI } from '../components/lv_3/CardPost/CardPost'
import { ListOfCardPost } from '../components/lv_3/ListOfCardPost/ListOfCardPost'
import { Layout } from '../components/lv_5/Layout/Layout'
import { postJsonRoute, tagJsonRoute } from '../config/routes'
import Style from './index.module.sass'

export async function getStaticProps() {
    const respMultiPost = await fetch(postJsonRoute)
    const multiPost = await respMultiPost.json()

    const respListTags = await fetch(tagJsonRoute)
    const listTags = await respListTags.json()

    return {
        props: {
            listPost: multiPost,
            listTags
        }
    }
}

interface HomeI {
    listPost: CardPostI[]
    listTags: string[]
}

export default function Home(props: HomeI) {
    const { listPost, listTags } = props

    return (
        <Layout mostSeen={listPost} listOfTags={listTags}>
            <div className={Style.firtsScreen}>
                <div className={Style.firtsScreen_logo}>
                    <img src="/assets/logo.svg" height="50" width="150" />
                </div>
                <h1 className={Style.firtsScreen_titulo}>
                    Desarrollo web y móvil
                </h1>

                <ListOfCardPost
                    className={Style.firtsScreen_listOfCardPost}
                    list={listPost}
                />
            </div>
        </Layout>
    )
}

function WrapperComponent(props: any) {
    console.log(props)

    // How to call
    // <WrapperComponent test="test">
    //     <div>hola</div>
    // </WrapperComponent>
    return (
        <div
            style={{
                backgroundColor: 'white',
                height: '50px',
                width: '50px'
            }}
        >
            {props.children}
        </div>
    )
}
