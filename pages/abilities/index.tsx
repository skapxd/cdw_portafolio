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

interface AbilitiesI {
    listPost: CardPostI[]
    listTags: string[]
    mostSeen: CardPostI[]
    lastPost: CardPostI[]
}
export default function Abilities(props: AbilitiesI) {
    const { mostSeen, listTags } = props
    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <div className={Style.abilities_title}>Habilidades</div>
        </Layout>
    )
}

export const abilitiesLink = () => 'abilities'
