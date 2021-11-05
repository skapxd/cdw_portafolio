import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import Style from './index.module.sass'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'

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

interface TechnologiesI {
    listPost: CardPostI[]
    listTags: string[]
    mostSeen: CardPostI[]
    lastPost: CardPostI[]
}
export default function Technologies(props: TechnologiesI) {
    const { mostSeen, listTags } = props
    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <h1 className={Style.abilities_title}>Habilidades</h1>
            <h2> Tecnologías según uso reciente </h2>
            <h2> Tecnologías según mayor uso</h2>
            <h2> Tecnologías según gustos </h2>
        </Layout>
    )
}

export const technologiesLink = () => 'technologies'
