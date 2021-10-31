import { CardPostI } from '../components/lv_3/CardPost/CardPost'
import { ListOfCardPost } from '../components/lv_3/ListOfCardPost/ListOfCardPost'
import { Layout } from '../components/lv_5/Layout/Layout'
import { getBasicData } from '../helpers/getBasicData'
import staticImage from '../routes/static_images'
import Style from './index.module.sass'

export async function getStaticProps() {
    const { listPost, listTags, mostSeen, lastPost } = getBasicData()

    return {
        props: {
            listPost,
            listTags,
            mostSeen,
            lastPost
        }
    }
}

interface HomeI {
    listPost: CardPostI[]
    mostSeen: CardPostI[]
    listTags: string[]
    lastPost: CardPostI[]
}

export default function Home(props: HomeI) {
    const { listPost, listTags, mostSeen, lastPost } = props

    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <div className={Style.firtsScreen}>
                <div className={Style.firtsScreen_logo}>
                    <img src={staticImage().logo} height="50" width="150" />
                </div>
                <h1 className={Style.firtsScreen_titulo}>
                    Desarrollo web y móvil
                </h1>

                <ListOfCardPost
                    className={Style.firtsScreen_listOfCardPost}
                    list={lastPost}
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

export function homeLink() {
    return '/'
}
