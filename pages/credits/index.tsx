import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
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

interface CreditsI {
    listPost: CardPostI[]
    listTags: string[]
    mostSeen: CardPostI[]
    lastPost: CardPostI[]
}
export default function Credits(props: CreditsI) {
    const { mostSeen, listTags } = props
    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <div className={Style.credits_title}> Créditos </div>
        </Layout>
    )
}
